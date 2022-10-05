import React from "react";
import Joi from "joi-browser";
import Form from "./reusable/Form";

class Form1 extends Form {
  state = {
    data: {
      companyName: "",
      businessLength: "",
      companyType: "",
      executiveInfo: "",
      yearIncor: "",
    },
    errors: {},
  };

  schema = {
    companyName: Joi.string().min(4).max(30).required().label("Company Name"),
    businessLength: Joi.string()
      .min(8)
      .max(255)
      .required()
      .label("Business Length"),
    businessType: Joi.string().min(8).max(255).required().label("Company Type"),
    executiveInfo: Joi.string()
      .min(8)
      .max(255)
      .required()
      .label("Executive Information"),

    yearIncor: Joi.string()
      .min(8)
      .max(255)
      .required()
      .label("Year Incorporated"),
  };

  ref = {
    companyNameRef: React.createRef(),
    businessLengthRef: React.createRef(),
    companyTypeRef: React.createRef(),
    executiveInfo: React.createRef(),
    yearIncorRef: React.createRef(),
  };

  render() {
    return (
      <div className="content">
        {this.renderInput(
          this.ref.companyNameRef,
          "companyName",
          "Company Name"
        )}
        {this.renderInput(
          this.ref.companyTypeRef,
          "businessType",
          "Select Company Type"
        )}
        {this.renderInput(
          this.ref.businessLengthRef,
          "businessLength",
          "Business Length"
        )}

        {this.renderInput(
          this.ref.yearIncorRef,
          "yearIncor",
          "Year Incorporated "
        )}
        {this.renderTextArea(
          this.ref.executiveInfo,
          "executiveInfo",
          "Executive Profiles (max 100 words)"
        )}
        {/* {this.printfetchError(this.state.fetchError)} */}
        {this.renderButton("Continue to next step!", this.props.btnOnClick)}
      </div>
    );
  }
}

export default Form1;
