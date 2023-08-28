import React from "react";

const TodoItem = ({ todoListItem }) => {
    return (
        <>
            <li className="todo-item">{todoListItem}</li>;
        </>
    )
};

export default TodoItem;