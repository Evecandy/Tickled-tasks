import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      dispatch(addTodo(value.trim()));
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
};

export default TodoForm;
