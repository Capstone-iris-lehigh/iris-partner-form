import React from "react";
import FormTemplate from "../reusable/FormTemplate";

class GeneralFormComponent extends FormTemplate {
  state = {
    data: {},
    errors: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ data: this.props.data });
  }

  getValidationFromJsonFile() {
    let schema = {};
    this.props.formContent.forEach(({ variableName, joiValidation }) => {
      schema[variableName] = joiValidation;
    });

    return schema;
  }

  getRefFromJsonFile() {
    let ref = {};
    this.props.formContent.forEach(({ variableName }) => {
      ref[variableName + "Ref"] = React.createRef();
    });
    return ref;
  }

  schema = this.getValidationFromJsonFile();
  ref = this.getRefFromJsonFile();

  render() {
    return (
      <div className="content">
        {this.props.formContent.map(
          ({ variableName, inputPlaceHolder, htmlType }, key) => {
            if (htmlType === "inputField") {
              return this.renderInput(
                this.ref[variableName + "Ref"],
                variableName,
                inputPlaceHolder,
                key
              );
            } else if (htmlType === "textAreaField") {
              return this.renderTextArea(
                this.ref[variableName + "Ref"],
                variableName,
                inputPlaceHolder,
                key
              );
            }
          }
        )}

        {this.renderButton("Continue to next step!")}
      </div>
    );
  }
}

export default GeneralFormComponent;
