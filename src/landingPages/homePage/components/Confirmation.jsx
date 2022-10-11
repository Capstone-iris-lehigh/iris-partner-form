import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../reusable/FormTemplate";
import edit from "../../../asset/edit.svg";
class Confirmation extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  varNameConvert = {
    companyName: "Company Name",
    businessLength: "Business Length",
    businessType: "Business Type",
    executiveInfo: "Executive Information",
    yearIncor: "Year Incorporated",
    offerDetailData: "",
    annualRevenue: "Annual revenues for the past 4 years",
    currentOffering: "Your current offerings",
    numberOfStaff: "Number of staff",
    expectedRevenue: "Expected revenues in adopting the IRIS solution",
    offeringType: "Offering type (global or domestic)",
  };

  render() {
    return (
      <div className="content">
        <div className="confirmation-content-container">
          <h5>
            Company Information{" "}
            <img src={edit} onClick={() => this.props.goBackEdit(0)} />
          </h5>
          {this.state.data.companyInfoData &&
            Object.keys(this.state.data.companyInfoData).map((key, index) => (
              <div>
                <span>{this.varNameConvert[key]}</span>
                <span>{this.state.data.companyInfoData[key]}</span>
              </div>
            ))}

          <h5>
            Offering Details{" "}
            <img src={edit} onClick={() => this.props.goBackEdit(1)} />
          </h5>
          {this.state.data.offerDetailData &&
            Object.keys(this.state.data.offerDetailData).map((key, index) => (
              <div>
                <span>{this.varNameConvert[key]}</span>
                <span>{this.state.data.offerDetailData[key]}</span>
              </div>
            ))}
        </div>

        <button onClick={this.props.goNextStep}>Review and Confirm</button>
      </div>
    );
  }
}

export default Confirmation;
