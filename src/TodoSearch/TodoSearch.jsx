import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";

function _TodoSearch(props) {
  const dispatch = useDispatch();

  const [term, setTerm] = React.useState("");
  const { Search } = Input;

  const onSearch = (term) => {
    dispatch({ type: "todos/todoSearch", payload: term });
  };

  const handleOnChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <br />
      <Search
        placeholder="Search a title or description here"
        onSearch={onSearch}
        enterButton
        value={term}
        onChange={handleOnChange}
      />
      <br />
    </div>
  );
}

export const TodoSearch = _TodoSearch;
