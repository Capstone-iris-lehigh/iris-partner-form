/* eslint-disable no-undef */
import { render, screen, cleanup } from "@testing-library/react";
import HomePage from "./landingPages/homePage/HomePage";
import React from "react";

// eslint-disable-next-line no-undef
afterEach(() => {
  cleanup();
});

test("Renders Home Page", () => {
  render(<HomePage />);
  const homePage = screen.getByTestId("homePage");
  expect(homePage).toBeInTheDocument();
});
