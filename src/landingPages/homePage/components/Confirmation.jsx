import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../reusable/FormTemplate";
import edit from "../../../asset/edit.svg";
import InputCompanyInfoJson from "../data/InputCompanyInfo.json";
import InputOfferDetailJson from "../data/InputOfferDetail.json";

class Confirmation extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    this.setState({ data: this.props.data });
  }

  varNameConvert_InputCompanyInfoJson(varName) {
    for (var i = 0; i < InputCompanyInfoJson.length; i++) {
      if (InputCompanyInfoJson[i].variableName === varName) {
        return InputCompanyInfoJson[i].title;
      }
    }
  }

  varNameConvert_InputOfferDetailJson(varName) {
    for (var i = 0; i < InputOfferDetailJson.length; i++) {
      if (InputOfferDetailJson[i].variableName === varName) {
        return InputOfferDetailJson[i].title;
      }
    }
  }

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
                <span>{this.varNameConvert_InputCompanyInfoJson(key)}</span>
                <span>{this.state.data.companyInfoData[key]}</span>
              </div>
            ))}

          <h5>
            Offering Details{" "}
            <img src={edit} onClick={() => this.props.goBackEdit(1)} />
          </h5>
          {this.state.data.offerDetailData &&
            Object.keys(this.state.data.offerDetailData).map((key, index) => (
              <div key={index}>
                <span>{this.varNameConvert_InputOfferDetailJson(key)}</span>
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
