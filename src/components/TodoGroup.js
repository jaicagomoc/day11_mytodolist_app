import React from "react";
import "./css/TodoGroup.css";
import TodoItem from "./TodoItem";

const TodoGroup = ({ todos }) => {
    return (
        <ul className="todoGroup">
            {todos.map((todotask) => (
                <TodoItem key={todotask.id} todo={todotask} />
            ))}
        </ul>
    );
};

export default TodoGroup;
