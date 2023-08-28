import React from "react";
import"./TodoItem.css";

const TodoItem = () => {
    return (
        <>
        <h2 className="title"> Todo List</h2>
        <li className="todo-item">{"To finish the homework"}</li>;
        </>
    )
};

export default TodoItem;
