import React, { Component, useEffect } from "react";
import { animated, Spring, config, Transition } from "react-spring";
import CompanyInfo from "./CompanyInfo";
import OfferDetail from "./OfferDetail";
import Confirmation from "./Confirmation";
import Submit from "./Submit";

import checkSVG from "../../../asset/check.svg";

class FormRoute extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    //functional state
    previousStep: 0,
    currentStep: 0,
    completedStep: 0,
    navItemRef: [],
    divHeighRef: null,
    elementLength: [],

    //form data state
    data: {
      companyInfoData: {
        companyName: "",
        businessLength: "",
        businessType: "",
        executiveInfo: "",
        yearIncor: "",
      },
      offerDetailData: {
        annualRevenue: "",
        currentOffering: "",
        numberOfStaff: "",
        expectedRevenue: "",
        offeringType: "",
      },
    },
  };

  componentDidMount() {
    this.setState({
      divHeighRef: React.createRef(),
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

  flushFormData(field, data) {
    this.setState({
      data: {
        ...this.state.data,
        [field]: data,
      },
    });
  }

  calOffset() {
    const { currentStep, elementLength } = this.state;
    var offset = 0;
    //60 for margin in css
    for (let i = 0; i < currentStep; i++) {
      offset += elementLength[i] + 60;
    }
    return offset;
  }

  dir() {
    const { previousStep, currentStep } = this.state;

    if (currentStep > previousStep) {
      return -20;
    }
    return 20;
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
    const data = [
      {
        id: 0,
        label: "Company Information",
        Component: (
          <CompanyInfo
            goNextStep={this.goNextStep}
            data={this.state.data.companyInfoData}
            flushFormData={this.flushFormData}
          />
        ),
      },
      {
        id: 1,
        label: "Offering Detail",
        Component: (
          <OfferDetail
            goNextStep={this.goNextStep}
            data={this.state.data.offerDetailData}
            flushFormData={this.flushFormData}
          />
        ),
      },
      {
        id: 2,
        label: "Confirmation",
        Component: (
          <Confirmation
            data={this.state.data}
            goNextStep={this.goNextStep}
            goBackEdit={this.goBackEdit}
          />
        ),
      },
      { id: 3, label: "Submit & Print", Component: <Submit /> },
    ];

    const { currentStep, navItemRef, completedStep } = this.state;

    return (
      <div className="home-form-container">
        <div className="home-form-nav">
          <div className="home-form-nav__container">
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
          from={{ opacity: 0.5, transform: `translateX(${this.dir()}px)` }}
          enter={{ opacity: 1, transform: `translateX(0)` }}
          leave={{ display: "none" }}
          config={config.default}
        >
          {(style, item) => (
            <animated.div className="home-form-content" style={style}>
              {data[item].Component}
            </animated.div>
          )}
        </Transition>
      </div>
    );
  }
}

export default FormRoute;
