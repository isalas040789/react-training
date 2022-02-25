import React from "react";
import { TodoItem } from "../TodoItem";

function _TodoList(props) {
  const { todoList } = props;
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {todoList.map((e, index) => {
        return e.visible ? <TodoItem key={e.title} item={e}></TodoItem> : null;
      })}
    </div>
  );
}

export const TodoList = _TodoList;
