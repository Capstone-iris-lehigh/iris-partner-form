import React, { Component } from "react";

import edit from "../../../asset/edit.svg";
import { formContent } from "../data/formContent";

class Confirmation extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ data: this.props.data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="content --confirmation-page">
        {formContent.map(({ fieldLabel, formContent }, FieldIndex) => (
          <div className="confirmation-content-container" key={FieldIndex}>
            <h5>
              {fieldLabel}
              <img
                src={edit}
                onClick={() => this.props.goBackEdit(FieldIndex)}
              />
            </h5>
            {formContent.map(({ title, variableName }) => (
              <div>
                <span>{title}</span>
                <span>
                  {data[Object.keys(data)[FieldIndex]] &&
                    data[Object.keys(data)[FieldIndex]][variableName]}
                </span>
              </div>
            ))}
          </div>
        ))}

        <button onClick={this.props.goNextStep}>Review and Confirm</button>
      </div>
    );
  }
}

export default Confirmation;
