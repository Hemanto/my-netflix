import React, { useState } from "react";
import TodoList from "../Components/TodoList";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  const addHandler = () => {
    setTodo([...todo, value]);
    setValue("");
  };
  const deleteTodo = (i) => {
    console.log(i);
    let newList = todo;
    newList.splice(i, 1);
    setTodo([...newList]);
  };
  return (
    <div>
      <h1>Todo</h1>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={addHandler}>Add todo</button>

      <div>
        {todo.map((todo, i) => (
          <TodoList key={i} todo={todo} deleteTodo={deleteTodo} i={i} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
