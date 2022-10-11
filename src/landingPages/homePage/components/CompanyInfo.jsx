import React from "react";
import Joi from "joi-browser";
import FormTemplate from "../reusable/FormTemplate";

class CompanyInfo extends FormTemplate {
  state = {
    data: {
      companyName: "",
      businessLength: "",
      businessType: "",
      executiveInfo: "",
      yearIncor: "",
    },
    errors: {},
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  schema = {
    companyName: Joi.string().min(4).max(30).required().label("Company Name"),
    businessType: Joi.string().required().label("Business Type"),

    businessLength: Joi.number().required().label("Business Length"),

    yearIncor: Joi.number().required().label("Year Incorporated"),

    executiveInfo: Joi.string()
      .min(8)
      .max(100)
      .required()
      .label("Executive Information"),
  };

  flushFormData = () => {
    this.props.flushFormData("companyInfoData", this.state.data);
  };

  ref = {
    companyNameRef: React.createRef(),
    businessLengthRef: React.createRef(),
    businessTypeRef: React.createRef(),
    executiveInfoRef: React.createRef(),
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
          this.ref.businessTypeRef,
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
          this.ref.executiveInfoRef,
          "executiveInfo",
          "Executive Profiles (max 100 words)"
        )}
        {/* {this.printfetchError(this.state.fetchError)} */}
        {this.renderButton("Continue to next step!")}
      </div>
    );
  }
}

export default CompanyInfo;
