import React, { useState } from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import "./css/TodoList.css";

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
        <div className="todoListContainer">
            <h2 className="todoListTitle"> Todo List</h2>
            <div className="todoListComponents">
                <TodoGroup todos={todos} />
                <TodoGenerator addTodo={addTodo} />
            </div>
        </div>
    );
};

export default TodoList;