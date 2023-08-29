import React from "react";
import "./css/TodoItem.css";

const TodoItem = ({ displayInput }) => {
    return (
        <li className="todoItem">{displayInput}</li>
    )
};

export default TodoItem;