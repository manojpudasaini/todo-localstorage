import React, { useEffect, useState } from "react";
import TodoList from "../TodoList";

const TodoForm = (props) => {
  const [todo, setTodo] = useState(props?.selectedTodo ?? {});
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setTodo((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  useEffect(() => {
    setTodo(props?.selectedTodo);
  }, [props?.selectedTodo]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(todo, "add");
    if (!todo?.id) {
      props.todos.push({ ...todo, id: Math.floor(Math.random() * 100) });
      console.log(props.todos, "new add");
      //   localStorage.setItem("todos", JSON.stringify(props.todos));
      //   props.setTodos([...props.todos]);
    } else {
      props.todos.map((obj) => {
        if (obj.id === todo.id) {
          props.todos.splice(props.todos.indexOf(obj), 1);
          props.todos.push({ ...todo, id: todo?.id });
        }
      });
    }
    localStorage.setItem("todos", JSON.stringify(props.todos));
    props.setTodos([...props.todos]);
  };
  const clearHandler = () => {
    setTodo({ ...todo, id: null, title: "", description: "" });
  };
  return (
    <div>
      <h4>Add Todo</h4>
      <form onSubmit={submitHandler}>
        {console.log(todo)}
        <div>
          <label>Title:</label>
          <input
            id="title"
            type="text"
            value={todo?.title}
            name={"title"}
            onChange={(e) => changeHandler(e)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            id="title"
            type="text"
            value={todo?.description}
            name={"description"}
            onChange={(e) => changeHandler(e)}
            required
          />
        </div>
        <button type="submit">add</button>
        {todo !== {} && <button onClick={() => clearHandler()}>clear</button>}
      </form>
    </div>
  );
};

export default TodoForm;
