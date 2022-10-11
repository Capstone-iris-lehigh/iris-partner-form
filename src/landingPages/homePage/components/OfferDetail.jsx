import React from "react";
import Joi from "joi-browser";
import FormTemplate from "../reusable/FormTemplate";

class OfferDetail extends FormTemplate {
  state = {
    data: {
      annualRevenue: "",
      currentOffering: "",
      numberOfStaff: "",
      expectedRevenue: "",
      offeringType: "",
    },
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

  ref = {
    annualRevenueRef: React.createRef(),
    numberOfStaffRef: React.createRef(),
    currentOfferingRef: React.createRef(),
    offeringTypeRef: React.createRef(),
    expectedRevenueRef: React.createRef(),
  };

  render() {
    return (
      <div className="content">
        {this.renderInput(
          this.ref.annualRevenueRef,
          "annualRevenue",
          "Annual revenues for the past 4 years"
        )}
        {this.renderInput(
          this.ref.currentOfferingRef,
          "currentOffering",
          "Your current offerings"
        )}
        {this.renderInput(
          this.ref.numberOfStaffRef,
          "numberOfStaff",
          "Number of staff"
        )}
        {this.renderInput(
          this.ref.offeringTypeRef,
          "offeringType",
          "Offering global or domestic"
        )}
        {this.renderInput(
          this.ref.expectedRevenueRef,
          "expectedRevenue",
          "Expected revenues in adopting the IRIS solution"
        )}

        {/* {this.printfetchError(this.state.fetchError)} */}
        {this.renderButton("Continue to next step!")}
      </div>
    );
  }
}

export default OfferDetail;
