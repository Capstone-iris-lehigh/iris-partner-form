import React, { Component } from "react";
import { animated, Spring, config, Transition } from "react-spring";
import GeneralFormComponent from "./GeneralFormComponent";

import Confirmation from "./Confirmation";
import Submit from "./Submit";
import { formContent } from "../data/formContent";

class FormRoute extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    //functional state
    previousStep: 0,
    currentStep: 0,
    completedStep: 0,

    //state for animation
    navItemRef: [],
    containerRef: React.createRef(),
    elementLength: [],
    containerLength: null,

    //form data state
    data: this.loadFieldDataVariableFromFile(),
  };

  handleResize = () => {
    this.setState({
      navItemRef: this.dynamicallyGenerateItemRef(),
    });

    setTimeout(() => {
      this.setState({
        elementLength: this.dynamicallyGenerateItemLength(),
        containerLength: this.state.containerRef.current.offsetWidth,
      });
    }, 0);
  };

  dynamicallyGenerateItemLength() {
    const elementLength = [];
    //dynamic for input file
    formContent.forEach((i, index) => {
      elementLength.push(this.state.navItemRef[index].current.offsetWidth);
    });

    //two for confirmation and submit
    elementLength.push(
      this.state.navItemRef[formContent.length].current.offsetWidth,
      this.state.navItemRef[formContent.length + 1].current.offsetWidth
    );
    return elementLength;
  }

  dynamicallyGenerateItemRef() {
    const ref = [];
    //dynamic for input file
    formContent.forEach(() => {
      ref.push(React.createRef());
    });

    //two for confirmation and submit
    ref.push(React.createRef(), React.createRef());
    return ref;
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  loadFieldDataVariableFromFile() {
    var data = {};
    formContent.forEach(({ fieldVarLabel }) => {
      data[fieldVarLabel] = {};
    });
    return data;
  }

  calOffset() {
    const { currentStep, elementLength, containerLength } = this.state;
    var offset =
      (containerLength - elementLength.reduce((pre, cur) => pre + cur, 0)) /
      (elementLength.length + 1);

    var translateX = offset;

    for (let i = 0; i < currentStep; i++) {
      translateX += elementLength[i] + offset;
    }

    return translateX;
  }

  goNextStep = () => {
    const { currentStep, completedStep } = this.state;
    if (currentStep === completedStep) {
      this.setState({
        currentStep: currentStep + 1,
        completedStep: completedStep + 1,
      });
    }
    if (currentStep < completedStep) {
      this.setState({
        currentStep: currentStep + 1,
      });
    }
  };

  goBackEdit = (id) => {
    this.setState({
      previousStep: this.state.currentStep,
      currentStep: id,
    });
  };

  render() {
    const routes = [];

    // create dynamic route from reading file
    formContent.forEach(({ fieldLabel, formContent, fieldVarLabel }, index) => {
      routes.push({
        id: index,
        label: fieldLabel,
        Component: (
          <GeneralFormComponent
            goNextStep={this.goNextStep}
            data={this.state.data[fieldVarLabel]}
            formContent={formContent}
          />
        ),
      });
    });

    // create state route confirmation and submit
    routes.push(
      {
        id: formContent.length,
        label: "Confirmation",
        Component: (
          <Confirmation
            data={this.state.data}
            formContent={formContent}
            goNextStep={this.goNextStep}
            goBackEdit={this.goBackEdit}
          />
        ),
      },
      {
        id: formContent.length + 1,
        label: "Submit & Print",
        Component: <Submit data={this.state.data} />,
      }
    );

    const { currentStep, navItemRef, containerRef, completedStep } = this.state;

    return (
      <div className="home-form-container" data-testid="formRoute">
        <div className="home-form-nav">
          <div className="home-form-nav__container" ref={containerRef}>
            <Spring
              config={config.stiff}
              to={{
                backgroundColor:
                  this.state.completedStep > this.state.currentStep
                    ? "#1eba45"
                    : "#dc0303",
                width: `${
                  this.state.elementLength[this.state.currentStep]
                    ? this.state.elementLength[this.state.currentStep]
                    : 0
                }px`,

                transform: `translateX(${this.calOffset() || 0}px)`,
              }}
            >
              {(styles) => (
                <animated.div
                  style={styles}
                  className="underline"
                ></animated.div>
              )}
            </Spring>

            {routes.map(({ id, label }) => (
              <span
                ref={navItemRef[id]}
                key={id}
                className={`${currentStep === id ? "active" : ""} ${
                  id < completedStep ? "clickable" : ""
                }`}
                onClick={() => {
                  id <= completedStep &&
                    this.setState({
                      previousStep: this.state.currentStep,
                      currentStep: id,
                    });
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <Transition
          items={this.state.currentStep}
          from={{ opacity: 0, transform: `translateY(-20px)` }}
          enter={{ opacity: 1, transform: `translateY(0px)` }}
          leave={{ display: "none" }}
          config={config.default}
        >
          {(style, item) => (
            <animated.div className="home-form-content" style={style}>
              {routes[item].Component}
            </animated.div>
          )}
        </Transition>
      </div>
    );
  }
}

export default FormRoute;
