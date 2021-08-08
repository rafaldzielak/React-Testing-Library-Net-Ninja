import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "../AddInput";

describe("AddInput", () => {
  test("should render input element", () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("value of the input changes when typing", () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "GO TO WORK" } });
    expect(inputElement).toHaveValue("GO TO WORK");
  });

  test("value clears after clicking add button", () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(inputElement).toHaveValue("");
  });
});
