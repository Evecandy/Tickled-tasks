import { useState } from "react";

export default initialValue => {
  const [todos, setTodos] = useState(initialValue);

  return [
    todos,
    todoText => {
      setTodos([...todos, todoText]);
    },
    todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex);
      setTodos(newTodos);
    },
  ];
};
