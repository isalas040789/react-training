import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./store";

/*
console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("State after dispatch: ", store.getState())
);

store.dispatch({
  type: "todos/todoAdded",
  payload: { title: "Title 1 - Test", text: "text for the Tile 1 - test" },
});
store.dispatch({
  type: "todos/todoAdded",
  payload: { title: "Title 2 - Test", text: "text for the Tile 2 - test" },
});
store.dispatch({
  type: "todos/todoAdded",
  payload: { title: "Title 3 - Test", text: "text for the Tile 3 - test" },
});

setTimeout(() => {
  store.dispatch({
    type: "todos/todoAdded",
    payload: { title: "Title 4 - Test", text: "text for the Tile 4 - test" },
  });    
}, 4000);

// Stop listening to state updates
unsubscribe();
*/
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
