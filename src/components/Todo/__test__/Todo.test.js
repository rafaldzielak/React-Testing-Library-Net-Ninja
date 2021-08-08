import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("AddInput", () => {
  test("should add todo", () => {
    render(<MockTodo />);
    addTask(["STUDY"]);
    screen.getByText(/STUDY/i);
  });
  test("should add multiple todos", () => {
    render(<MockTodo />);
    addTask(["STUDY", "WORK", "EXERCISE"]);
    const tasks = screen.getAllByTestId("task-container");
    expect(tasks).toHaveLength(3);
  });
  test("task should not have completed class when rendered", () => {
    render(<MockTodo />);
    addTask(["STUDY"]);
    const task = screen.getByText(/STUDY/i);
    expect(task).not.toHaveClass("todo-item-active");
  });
  test("task should have completed class when clicked", () => {
    render(<MockTodo />);
    addTask(["STUDY"]);
    const task = screen.getByText(/STUDY/i);
    fireEvent.click(task);
    expect(task).toHaveClass("todo-item-active");
  });
});
