import React from "react";
// import Joi from "joi-browser";
import Joi from "joi-browser";
import FormTemplate from "../reusable/FormTemplate";
import InputCompanyInfoJson from "../data/InputCompanyInfo.json";
class CompanyInfo extends FormTemplate {
  state = {
    data: {},
    errors: {},
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  //look forward how to read from json file
  schema = {
    companyName: Joi.string().min(4).max(30).required().label("Company Name"),
    businessType: Joi.string().required().label("Business Type"),
    businessLength: Joi.number().required().required().label("Business Length"),
    yearIncor: Joi.number().required().label("Year Incorporated"),
    executiveInfo: Joi.string()
      .min(8)
      .max(500)
      .required()
      .label("Executive Information"),
  };

  flushFormData = () => {
    this.props.flushFormData("companyInfoData", this.state.data);
  };

  getRefFromJsonFile() {
    let ref = {};
    InputCompanyInfoJson.forEach(({ variableName }) => {
      ref[variableName + "Ref"] = React.createRef();
    });
    return ref;
  }

  ref = this.getRefFromJsonFile();

  render() {
    return (
      <div className="content">
        {InputCompanyInfoJson.map(
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

export default CompanyInfo;
