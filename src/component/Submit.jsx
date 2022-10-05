import React from "react";
import Joi from "joi-browser";
import Form from "./reusable/Form";

class Confirmation extends Form {
  state = {
    data: {},
    errors: {},
  };

  schema = {};

  ref = {};

  render() {
    return (
      <div className="content">
        <p>Submit and Print</p>
      </div>
    );
  }
}

export default Confirmation;
