import React from "react";
import "./App.css";
import 'antd/dist/antd.css';

import { TodoList } from "./TodoList";
import { TodoCounter } from "./TodoCounter";
import { TodoCreateButton } from "./TodoCreateButton";
import { TodoSearch } from "./TodoSearch";

import { Divider } from 'antd';

const theList = [
  {
    title: "1",
    body: "one",
    visible: true,
  },
  {
    title: "2",
    body: "two",
    visible: true,
  },
  {
    title: "3",
    body: "three",
    visible: true,
  },
  {
    title: "4",
    body: "four",
    visible: true,
  },
];

function App() {
  const [todoList, setTodoList] = React.useState(theList);

  return (
    <div>
      <h1>Trainig Board</h1>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "5%" }}></div>
        <div style={{ width: "35%" }}>
          <TodoSearch
            todoList={todoList}
            setTodoList={setTodoList}
          ></TodoSearch>
          <Divider />
          <TodoList todoList={todoList}></TodoList>
        </div>
        <div style={{ width: "25%" }}>
          <TodoCounter todoList={todoList}></TodoCounter>
        </div>
        <div style={{ width: "30%" }}>
          <TodoCreateButton
            todoList={todoList}
            setTodoList={setTodoList}
          ></TodoCreateButton>
        </div>
        <div style={{ width: "5%" }}></div>
      </div>
    </div>
  );
}

export default App;
