import React from "react";
import "./css/TodoGroup.css";
import TodoItem from "./TodoItem";

const TodoGroup = ({ todos }) => {
    const filteredTodos = todos.isDone ? todos.filter(task => task.done) : todos;

    return (
        <ul className="todoGroup">
            {filteredTodos.map((todotask) => (
                <TodoItem key={todotask.task.id} todo={todotask} isDone={todos.isDone}/>
            ))}
        </ul>
    );
};

export default TodoGroup;
