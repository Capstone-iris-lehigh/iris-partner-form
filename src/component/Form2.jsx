import React from "react";
import Joi from "joi-browser";
import Form from "./reusable/Form";

class Form1 extends Form {
  state = {
    data: {},
    errors: {},
  };

  schema = {};

  ref = {};

  render() {
    return (
      <div className="content">
        <p>Second part of the form</p>
      </div>
    );
  }
}

export default Form1;
