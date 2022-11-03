import React, { Component } from "react";
import Joi from "joi-browser";
import warn from "../../../asset/warning.svg";
import PropTypes from "prop-types";
import { DotLoader } from "react-spinners";
import CountryCode from "./CountryCode";

class Form extends Component {
  state = {
    data: {},
    errors: {},

    loading: false,
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    errors[error.details[0].path[0]] = error.details[0].message;

    const ref = this.ref[error.details[0].path[0] + "Ref"].current;

    ref && ref.focus();

    return errors;
  };

  handleSubmit = () => {
    this.setState({ errors: {} });

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.props.goNextStep();
  };

  handleChange = ({ currentTarget: input }) => {
    const { data } = this.state;
    data[input.name] = input.value;
    this.setState({ errors: {}, data });
  };

  setInitialValue = (field, value) => {
    const { data } = this.state;
    if (!data[field]) {
      data[field] = value;
      this.setState({ data });
    }
  };

  renderButton(label) {
    const { loading } = this.state;
    return (
      <button onClick={() => this.handleSubmit()}>
        {loading ? <DotLoader size={20} color="white" /> : label}
      </button>
    );
  }

  printError(name) {
    return (
      this.state.errors[name] && (
        <div className="error-message">
          <img src={warn} />
          <p>{this.state.errors[name].replaceAll('"', "")}</p>
        </div>
      )
    );
  }

  renderInput(ref, label, indicator, key, type = "text") {
    return (
      <div className="input-container" key={key}>
        <input
          className="input-container__input"
          ref={ref}
          name={label}
          id={label}
          type={type}
          value={this.state.data[label]}
          onChange={(e) => this.handleChange(e)}
        />

        <span
          className={`${
            this.state.data[label] && this.state.data[label].length > 0
              ? "active"
              : ""
          }`}
        >
          {indicator}
        </span>

        {this.printError(label)}
      </div>
    );
  }

  renderInputSelection(ref, label, indicator, options, key) {
    return (
      <div className="input-container" key={key}>
        <input
          className="input-container__input"
          ref={ref}
          name={label}
          id={label}
          value={this.state.data[label]}
          onChange={(e) => this.handleChange(e)}
          list={label + "list"}
        />

        <datalist id={label + "list"}>
          {options.map((opt, key) => (
            <option key={key}>{opt}</option>
          ))}
        </datalist>

        <span
          className={`${
            this.state.data[label] && this.state.data[label].length > 0
              ? "active"
              : ""
          }`}
        >
          {indicator}
        </span>

        {this.printError(label)}
      </div>
    );
  }

  renderTextArea(ref, label, indicator, key, type = "text") {
    return (
      <div className="input-container --textarea" key={key}>
        <textarea
          className="input-container__input "
          ref={ref}
          name={label}
          id={label}
          type={type}
          value={this.state.data[label]}
          onChange={(e) => this.handleChange(e)}
        />

        <span
          className={`${
            this.state.data[label] && this.state.data[label].length > 0
              ? "active"
              : ""
          }`}
        >
          {indicator}
        </span>

        {this.printError(label)}
      </div>
    );
  }

  renderCountryCode = (label, key) => {
    if (!this.state.data[label]) {
      this.setInitialValue(label, 1);
    }
    return (
      <div className="input-container" key={key}>
        <CountryCode
          key={key}
          setInitialValue={this.setInitialValue}
          name={label}
          value={this.state.data[label]}
          handleChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  };
}

export default Form;

Form.propTypes = {
  goNextStep: PropTypes.isRequired,
};
