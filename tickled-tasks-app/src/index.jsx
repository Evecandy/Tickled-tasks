import React from "react";
import ReactDOM from 'react-dom/client';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Typography from '@mui/material/Typography';
import useTodoState from './useTodoState';



const App = () => {
    const [todos, addTodo, deleteTodo] = useTodoState([]);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        My Tickled Tasks
      </Typography>
      <TodoForm
       saveTodo={(todoText) =>{
        const trimmedText = todoText.trim();

        if (trimmedText.length > 0){
            addTodo(trimmedText);
        }
       }} />
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
};



const rootElement = document.getElementById('root');  
const root = ReactDOM.createRoot(rootElement); 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

