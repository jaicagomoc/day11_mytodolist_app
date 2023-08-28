import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todoListItem }) => {
    return (
        <>
            <li className="todo-item">{todoListItem}</li>;
        </>
    )
};

export default TodoItem;