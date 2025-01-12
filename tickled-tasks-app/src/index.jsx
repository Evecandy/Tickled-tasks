import React from "react";
import ReactDOM from "react-dom/client";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Typography from "@mui/material/Typography";
// import useTodoState from "./useTodoState";

import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  // const [todos, addTodo, deleteTodo] = useTodoState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        My Tickled Tasks
      </Typography>
      <TodoForm />
      <TodoList />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
