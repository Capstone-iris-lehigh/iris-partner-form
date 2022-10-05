import React, { Component, useEffect } from "react";
import { animated, Spring, config, Transition } from "react-spring";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Confirmation from "./Confirmation";
import Submit from "./Submit";
class formContent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    previousStep: 0,
    step: 0,
    navItemRef: [],
    elementLength: [],
  };

  componentDidMount() {
    const { step, navItemRef } = this.state;

    this.setState({
      navItemRef: [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
      ],
    });

    setTimeout(() => {
      this.setState({
        elementLength: [
          this.state.navItemRef[0].current.offsetWidth,
          this.state.navItemRef[1].current.offsetWidth,
          this.state.navItemRef[2].current.offsetWidth,
          this.state.navItemRef[3].current.offsetWidth,
        ],
      });
    }, 100);
  }

  calOffset() {
    const { step, elementLength } = this.state;
    var offset = 0;
    //30 for margin in css
    for (let i = 0; i < step; i++) {
      offset += elementLength[i] + 30;
    }
    return offset;
  }

  dir() {
    const { previousStep, step } = this.state;

    if (step > previousStep) {
      return -50;
    }
    return 50;
  }

  btnOnClick = () => {
    this.setState({ step: this.state.step + 1 });
  };

  render() {
    const data = [
      {
        id: 0,
        label: "Company Information",
        Component: <Form1 btnOnClick={this.btnOnClick} />,
      },
      { id: 1, label: "Offering Detail", Component: <Form2 /> },
      { id: 2, label: "Confirmation", Component: <Confirmation /> },
      { id: 3, label: "Submit & Print", Component: <Submit /> },
    ];

    const { step, navItemRef } = this.state;

    return (
      <div className="app-form-container">
        <div className="app-form-nav">
          <div className="app-form-nav__container">
            <Spring
              config={config.stiff}
              to={{
                width: `${
                  this.state.elementLength[this.state.step]
                    ? this.state.elementLength[this.state.step]
                    : 0
                }px`,

                transform: `translateX(${this.calOffset()}px)`,
              }}
            >
              {(styles) => (
                <animated.div
                  style={styles}
                  className="underline"
                ></animated.div>
              )}
            </Spring>

            {data.map(({ id, label }) => (
              <span
                ref={navItemRef[id]}
                key={id}
                className={`${step === id ? "active" : ""}`}
                onClick={() => {
                  this.setState({ previousStep: this.state.step, step: id });
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <Transition
          items={this.state.step}
          // from={{ opacity: 0.5, transform: `translateX(${this.dir()}px)` }}
          // enter={{ opacity: 1, transform: `translateX(0)` }}
          from={{
            opacity: 0.5,
            transform: `scaleY(0.5)`,
            transformOrigin: "top",
          }}
          enter={{ opacity: 1, transform: `scaleY(1)` }}
          leave={{ display: "none" }}
          config={config.stiff}
        >
          {(style, item) => (
            <animated.div className="app-form-content" style={style}>
              {data[item].Component}
            </animated.div>
          )}
        </Transition>
      </div>
    );
  }
}

export default formContent;
