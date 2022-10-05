import React, { Component, useEffect } from "react";
import { animated, Spring, config } from "react-spring";
import Form1 from "./Form1";
class formContent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
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

  render() {
    const data = [
      { id: 0, label: "Company Information" },
      { id: 1, label: "Offering Detail" },
      { id: 2, label: "Confirmation" },
      { id: 3, label: "Submit & Print" },
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
                  this.setState({ step: id });
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="app-form-content">
          <Form1 />
        </div>
      </div>
    );
  }
}

export default formContent;
