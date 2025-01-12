import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../store/todosSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <List>
      {todos.map((todo, index) => (
        <ListItem key={index.toString()} button={true}>
          <Checkbox tabIndex={-1} disableRipple />
          <ListItemText primary={todo} />

          <IconButton
            aria-label="Delete"
            onClick={() => dispatch(deleteTodo(index))}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};
export default TodoList;
