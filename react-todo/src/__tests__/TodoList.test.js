import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  it("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
  });

  it("adds a new todo item", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  it("toggles a todo item", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  it("deletes a todo item", () => {
    render(<TodoList />);
    const todo = screen.getByText("Build a project");
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
