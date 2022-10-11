import React from "react";
import FormTemplate from "../reusable/FormTemplate";

class Confirmation extends FormTemplate {
  state = {
    data: {},
    errors: {},
  };

  schema = {};

  ref = {};

  render() {
    return (
      <div className="content">
        <button>Call Iris API </button>
      </div>
    );
  }
}

export default Confirmation;
