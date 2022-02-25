import React from "react";

function _TodoCounter(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "green" }}>Elementos totales {props.todoList.length}</h2>
    </div>
  );
}

export const TodoCounter = _TodoCounter;
