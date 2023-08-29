import React from "react";
import "./css/TodoItem.css";
import { useDispatch } from "react-redux";
import { toggleTodoStatus } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggleDone = () => {
        dispatch(toggleTodoStatus(todo.id));
    }
    const todoStyle = {
        textDecoration: todo.done ? "line-through" : "none",
    };

    return (
        <li className="todoItem" style={todoStyle} onClick={handleToggleDone}>{todo.text}</li>
    )
};

export default TodoItem;