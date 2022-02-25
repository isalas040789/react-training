import React from "react";

function _TodoItem(props) {
  const { item } = props;
  return (
    <div
      style={{
        background: "blue",
        color: "red",
        padding: "10px",
        margin: "10px",
        width: "100px",
      }}
    >
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </div>
  );
}

export const TodoItem = _TodoItem;
