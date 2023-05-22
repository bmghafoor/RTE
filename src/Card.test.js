import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

// Smoke Test
it("Should render Card", () => {
  render(<Card />);
});

// Snapshot Test
it("should match snapshot", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});
