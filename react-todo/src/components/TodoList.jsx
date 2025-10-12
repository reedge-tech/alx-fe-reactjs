import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Build a project"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const toggleTodo = (index) => {
    const updated = [...todos];
    if (updated[index].startsWith("[Done] ")) {
      updated[index] = updated[index].replace("[Done] ", "");
    } else {
      updated[index] = `[Done] ${updated[index]}`;
    }
    setTodos(updated);
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              onClick={() => toggleTodo(index)}
              style={{
                cursor: "pointer",
                marginRight: "10px",
                textDecoration: todo.startsWith("[Done] ")
                  ? "line-through"
                  : "none",
              }}
            >
              {todo}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
