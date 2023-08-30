import React from "react";
import "./css/TodoGroup.css";
import TodoItem from "./TodoItem";

const TodoGroup = ({ todos }) => {
    return (
        <ul className="todoGroup">
            {todos.map((todo) => (
                <TodoItem key={todo.task.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoGroup;
