import React from "react";

const TodoItem = ({ todoListItem }) => {
    return (
        <>
            <li className="todoItem">{todoListItem}</li>;
        </>
    )
};

export default TodoItem;