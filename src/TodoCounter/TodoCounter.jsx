import React from "react";
import { useSelector } from "react-redux";

function _TodoCounter(props) {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "green" }}>Elementos totales {todos.length}</h2>
    </div>
  );
}

export const TodoCounter = _TodoCounter;
