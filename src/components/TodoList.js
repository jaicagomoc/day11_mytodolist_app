import React ,{ useState } from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
    const [todos, setTodos] = useState([
        "To finish homework",
        "To review for tomorrow",
        "To revisit some topics"
      ]);
    
      const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
      };

  return (
    <div>
      <h2 className="title"> Todo List</h2>
      <TodoGroup todos={todos} />
      <TodoGenerator addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
