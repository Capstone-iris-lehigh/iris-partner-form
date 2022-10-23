import React from "react";
import FormTemplate from "../reusable/FormTemplate";
import { PulseLoader } from "react-spinners";
class Confirmation extends FormTemplate {
  state = {
    errors: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const formData = new FormData();
    const api = "";

    Object.keys(this.props.data).map((field) =>
      Object.keys(this.props.data[field]).map((key) => {
        formData.append(key, this.props.data[field][key]);
      })
    );

    const request = new XMLHttpRequest();
    request.open("POST", api);
    request.send(formData);
  }

  ref = {};

  render() {
    return (
      <div className="content">
        <button>
          <span style={{ marginRight: "15px" }}>Calling Iris API</span>{" "}
          <PulseLoader size={5} color="white" />
        </button>
      </div>
    );
  }
}

export default Confirmation;
