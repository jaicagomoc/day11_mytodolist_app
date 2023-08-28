import React from "react";
import "./css/TodoGroup.css";

const TodoGroup = ({ todos }) => {
    return (
        <ul className="todoGroup">
            {todos.map((todo, index) => (
                <li className="todoItem" key={index}>{todo}</li>
            ))}
        </ul>
    );
};

export default TodoGroup;
