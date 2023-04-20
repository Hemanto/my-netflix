import React from "react";

function TodoList({ todo, deleteTodo, i }) {
  return (
    <div style={{ display: "flex" }}>
      <p>{todo}</p>
      <p onClick={() => deleteTodo(i)}>Cross</p>
    </div>
  );
}

export default TodoList;
