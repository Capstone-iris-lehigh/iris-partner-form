import React from "react";
import Joi from "joi-browser";
import FormTemplate from "../reusable/FormTemplate";
import InputOfferDetailJson from "../data/InputOfferDetail.json";

class OfferDetail extends FormTemplate {
  state = {
    data: {},
    errors: {},
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  schema = {
    annualRevenue: Joi.number().required().label("Annual revenues"),
    currentOffering: Joi.number().required().label("Current offerings"),

    numberOfStaff: Joi.number().required().label("Number of staff"),
    offeringType: Joi.string().required().label("Offering type"),
    expectedRevenue: Joi.number().required().label("Expected revenues"),
  };

  flushFormData = () => {
    this.props.flushFormData("offerDetailData", this.state.data);
  };

  getRefFromJsonFile() {
    let ref = {};
    InputOfferDetailJson.forEach(({ variableName }) => {
      ref[variableName + "Ref"] = React.createRef();
    });
    return ref;
  }

  ref = this.getRefFromJsonFile();

  render() {
    return (
      <div className="content">
        {InputOfferDetailJson.map(
          ({ variableName, InputPlaceHolder, htmlType }, index) => {
            if (htmlType === "inputField") {
              return this.renderInput(
                this.ref[variableName + "Ref"],
                variableName,
                InputPlaceHolder
              );
            } else if (htmlType === "textAreaField") {
              return this.renderTextArea(
                this.ref[variableName + "Ref"],
                variableName,
                InputPlaceHolder
              );
            }
          }
        )}

        {this.renderButton("Continue to next step!")}
      </div>
    );
  }
}

export default OfferDetail;
