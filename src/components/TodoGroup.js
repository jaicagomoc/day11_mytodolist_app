import React from "react";
import "./css/TodoGroup.css";
import TodoItem from "./TodoItem";

const TodoGroup = ({ todos }) => {
    const filteredTodos = todos.isDone ? todos.filter(task => task.done) : todos;
    return (
        <ul className="todoGroup">
            {todos.map((todotask) => (
                <TodoItem key={todotask.id} todo={todotask} />
            ))}
        </ul>
    );
};

export default TodoGroup;
