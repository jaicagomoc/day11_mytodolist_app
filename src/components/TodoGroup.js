import React from "react";
import "./TodoGroup.css";

const TodoGroup = ({ todos }) => {
    return (
        <ul className="todo-group">
            {todos.map((todo, index) => (
                <li className="todo-item" key={index}>{todo}</li>
            ))}
        </ul>
    );
};

export default TodoGroup;
