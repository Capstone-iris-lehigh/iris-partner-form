/* eslint-disable no-undef */
import { render, screen, cleanup } from "@testing-library/react";
import FormRoute from "../homePage/components/FormRoute";
import renderer from "react-test-renderer";
import React from "react";

// eslint-disable-next-line no-undef
afterEach(() => {
  cleanup();
});

test("renders formRoute component", () => {
  render(<FormRoute />);
  const homePage = screen.getByTestId("formRoute");
  expect(homePage).toBeInTheDocument();
});

test("matches snapshot", () => {
  const tree = renderer.create(<FormRoute />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("steps testing", () => {
  const component = renderer.create(<FormRoute />).getInstance();

  expect(component.state.previousStep).toBe(0);
  expect(component.state.currentStep).toBe(0);
  expect(component.state.completedStep).toBe(0);

  component.goNextStep();

  expect(component.state.currentStep).toBe(1);
  expect(component.state.completedStep).toBe(1);

  component.goBackEdit(2);

  expect(component.state.currentStep).toBe(2);
});
