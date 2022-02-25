import React from "react";
import { Input } from 'antd';

function _TodoSearch(props) {
  const { todoList, setTodoList } = props;
  const [term, setTerm] = React.useState("");
  const { Search } = Input;

  const onSearch = (term) => {
    const newList = [...todoList];
    newList.forEach((e) => {
      e.visible =
        term === "" || e.title.includes(term) || e.body.includes(term);
    });
    setTodoList(newList);
  };

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <br />
      <Search placeholder="Search a title or description here" onSearch={onSearch} enterButton value={term} onChange={handleOnChange} />
      <br />
    </div>
  );
}

export const TodoSearch = _TodoSearch;
