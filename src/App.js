import React, { useState } from "react"; 
import TodoGroup from './components/TodoGroup'
import TodoGenerator from "./components/TodoGenerator";

function App() {
  const [todos, setTodos] = useState([
    "To finish homework",
    "To review for tomorrow",
    "To revisit some topics"
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <h2 className="title"> Todo List</h2>
      <TodoGroup todos={todos}/>
      <TodoGenerator todos={addTodo} />
    </>

  );
}

export default App;