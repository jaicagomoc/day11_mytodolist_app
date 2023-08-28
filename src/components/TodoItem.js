import React from "react";
import "./css/TodoItem.css";

const TodoItem = ({ todoListItem }) => {
    return (
        <>
            <li className="todo-item">{todoListItem}</li>;
        </>
    )
};

export default TodoItem;