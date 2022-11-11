import React, { useState } from "react";
import TodoForm from "../Form";
import TodoCard from "../Todocard";

const TodoList = () => {
  let storedTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState(
    storedTodos ? JSON.parse(storedTodos) : []
  );
  const [selectedTodo, setSelected] = useState({});
  const deleteHandler = (index) => {
    todos?.splice(index, 1);
    setTodos([...todos]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const editHandler = (item) => {
    console.log(item);
    setSelected(item);
  };
  return (
    <div>
      <TodoForm selectedTodo={selectedTodo} todos={todos} setTodos={setTodos} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {todos?.map((item, index) => (
          <TodoCard
            key={index}
            index={index}
            todo={item}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
