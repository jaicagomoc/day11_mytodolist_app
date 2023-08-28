import React from "react";
import "./css/TodoItem.css";

const TodoItem = ({ text }) => {
    return (
        <li className="todoItem">{text}</li>
    )
};

export default TodoItem;