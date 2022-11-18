import React from "react";
import FormTemplate from "../reusable/FormTemplate";
import { PulseLoader } from "react-spinners";
class Confirmation extends FormTemplate {
  state = {
    errors: {},
    formData: null,
    request: null,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const formData = new FormData();
    var api = "  https://iris-form-backend.netlify.app/.netlify/functions/api";
    api += "/sendEmail";

    Object.keys(this.props.data).map((field) =>
      Object.keys(this.props.data[field]).map((key) => {
        formData.append(key, this.props.data[field][key]);
      })
    );

    const request = new XMLHttpRequest();
    request.open("POST", api);
    request.send(formData);

    this.setState({ formData, request });
  }

  ref = {};

  render() {
    return (
      <div className="content" data-testid="submit">
        <p className="final-message">
          Thank you for submitting your companies corporate profile. The IRIS
          Team will review and be in touch soon. If chosen to be a certified
          IRIS Smart City Solution Provide, an MOU will be sent for your review
          and signage.
        </p>
        <button>
          <span style={{ marginRight: "15px" }}>Calling Iris API</span>{" "}
          <PulseLoader size={5} color="white" />
        </button>
      </div>
    );
  }
}

export default Confirmation;
