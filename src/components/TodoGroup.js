import React from "react";
import "./css/TodoGroup.css";
import TodoItem from "./TodoItem";

const TodoGroup = ({ todos }) => {
    return (
        <ul className="todoGroup">
            {todos.map((todo, index) => (
                <TodoItem key={index} text={todo}/>
            ))}
        </ul>
    );
};

export default TodoGroup;
