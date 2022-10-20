import React from "react";
import FormTemplate from "../reusable/FormTemplate";
import { PulseLoader } from "react-spinners";
class Confirmation extends FormTemplate {
  state = {
    errors: {},
  };

  componentDidMount() {
    const formData = new FormData();
    const api = "";

    Object.keys(this.props.data).map((key, index) =>
      Object.keys(this.props.data[key]).map((field, index) => {
        console.log(field);
        formData.append(field, this.props.data[key][field]);
      })
    );
    for (var pair of formData.entries()) {
      console.log(pair[0] + " - " + pair[1]);
    }

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
