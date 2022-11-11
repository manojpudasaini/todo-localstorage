import React from "react";

const TodoCard = (props) => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "5px",
        padding: "2px 5px",
      }}
    >
      <h2>{props.todo?.title}</h2>
      <p>{props.todo?.description}</p>
      <button onClick={() => props?.editHandler(props?.todo)}>edit</button>
      <button onClick={() => props?.deleteHandler(props?.index)}>delete</button>
    </div>
  );
};

export default TodoCard;
