const todosInitialState = [
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

export default function todosReducer(state = todosInitialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      return [
        ...state,
        {
          title: action.payload.title,
          text: action.payload.body,
          visible: true,
        },
      ];
    }
    case "todos/todoSearch": {
      return state.map((todo) => {
        return {
          ...todo,
          visible:
            action.payload === "" ||
            todo.title.includes(action.payload) ||
            todo.body.includes(action.payload),
        };
      });
    }
    default:
      return state;
  }
}
