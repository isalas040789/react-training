import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "../TodoItem";

function _TodoList(props) {
  const todos = useSelector((state) => {
    return state.todos;
  });
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {todos.map((e, index) => {
        return e.visible ? <TodoItem key={e.title} item={e}></TodoItem> : null;
      })}
    </div>
  );
}

export const TodoList = _TodoList;
