import React, { useState, useForm } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">

      <TodoForm saveTodo={todoText => {
        const trimmedText = todoText.trim();
        if (trimmedText.length > 0) {
          setTodos([...todos, trimmedText]);
        }
        }}

        

      />

      <TodoList todos={todos}
        deleteTodo={todoIndex => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);
          setTodos(newTodos);
        }}
       />

    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
