/* eslint-disable no-undef */
import { render, screen, cleanup } from "@testing-library/react";
import Submit from "../homePage/components/Submit";
import renderer from "react-test-renderer";
import React from "react";

// eslint-disable-next-line no-undef
afterEach(() => {
  cleanup();
});

test("renders submit component", () => {
  render(<Submit data={{}} />);
  const submit = screen.getByTestId("submit");
  expect(submit).toBeInTheDocument();
});

test("testing for correct amount of form data at the end phase", () => {
  let testingData = {
    testing: {
      field1: "",
      field2: "",
      field3: "",
    },
    testing2: {
      field1: "",
      field2: "",
    },
  };

  const component = renderer
    .create(<Submit data={testingData} />)
    .getInstance();

  var formDataCount = 0;

  for (const pair of component.state.formData.entries()) {
    formDataCount += 1;
  }

  expect(formDataCount).toBe(5);
});

test("http post testing", () => {
  let testingData = {
    testing: {
      field1: "",
      field2: "",
      field3: "",
    },
    testing2: {
      field1: "",
      field2: "",
    },
  };

  const component = renderer
    .create(<Submit data={testingData} />)
    .getInstance();

  //state 1 = server connection established and ready to send
  expect(component.state.request.readyState).toBe(1);
});
