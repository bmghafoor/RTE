import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).not.toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).toBeInTheDocument();
});

// Smoke Test
it("Should render Component", () => {
  render(<Carousel />);
});

// Snapshot Test
it("should match snapshot", () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it("works when you click on the left arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).not.toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).not.toBeInTheDocument();
});

it("should not display the left arrow on first slide", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).not.toBeInTheDocument();

  const leftArrow = queryByTestId("left-arrow");

  // expect the left arrow to not show
  expect(leftArrow).not.toBeInTheDocument();
});

it("should not display the right arrow on last slide", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  expect(
    queryByAltText("Photo by Richard Pasquarella on Unsplash")
  ).toBeInTheDocument();
  expect(
    queryByAltText("Photo by Pratik Patel on Unsplash")
  ).not.toBeInTheDocument();

  const rightArrow = queryByTestId("right-arrow");

  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(
    queryByAltText("Photo by Josh Post on Unsplash")
  ).toBeInTheDocument();


  // expect the left arrow to not show
  expect(rightArrow).not.toBeInTheDocument();
});
