import React from "react";
import "./css/TodoItem.css";
import { useDispatch } from "react-redux";
import { toggleTodoStatus, deleteTodoList } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggleDone = () => {
        if (todo.isDone) {
            console.log("go to detail page");
        } else {
            dispatch(toggleTodoStatus(todo.id));
        }
    };

    const todoStyle = {
        textDecoration: todo.done ? "line-through" : "none",
    };

    const handleDeleteTodo = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete todo?");
        if (confirmDelete) {
            dispatch(deleteTodoList(todo.id));
        }
    };

    return (
        <li className="todoItem" style={todoStyle}>
            <span onClick={handleToggleDone}>{todo.text}</span>
            <button className="deleteButton" onClick={handleDeleteTodo}> x </button>
        </li>
    );
};

export default TodoItem;
