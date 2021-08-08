import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("should render same text passed into title prop", () => {
  render(<Header title='My header' />);
  const headingElement = screen.getByText(/My header/i);
  expect(headingElement).toBeInTheDocument();
});

// test("should render same text passed into title prop", () => {
//   render(<Header title='My header' />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });
describe("Header", () => {
  test("should render same text passed into title prop", () => {
    render(<Header title='My header' />);
    const headingElement = screen.getByRole("heading", { name: "My header" });
    expect(headingElement).toBeInTheDocument();
  });

  test("should render same text passed into title prop", () => {
    render(<Header title='My header' />);
    const headingElement = screen.getByTitle("Header");
    expect(headingElement).toBeInTheDocument();
  });

  test("should render same text passed into title prop", () => {
    render(<Header title='My header' />);
    const headingElement = screen.getByTestId("header-1");
    expect(headingElement).toBeInTheDocument();
  });

  test("should render same text passed into title prop", async () => {
    render(<Header title='My header' />);
    const headingElement = await screen.findByText("My header");
    expect(headingElement).toBeInTheDocument();
  });

  test("should render same text passed into title prop", () => {
    render(<Header title='My header' />);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
  });

  test("should render same text passed into title prop", () => {
    render(<Header title='My header' />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements).toHaveLength(2);
  });
});
