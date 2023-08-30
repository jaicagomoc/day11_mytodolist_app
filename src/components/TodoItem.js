import React from "react";
import "./css/TodoItem.css";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { toggleTodoStatus, deleteTodoList } from "../redux/todoSlice";
=======
import { toggleTodoStatus } from "../redux/todoSlice";
>>>>>>> parent of 1187054 (feat: functional deleteTodo)

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleToggleDone = () => {
        dispatch(toggleTodoStatus(todo.task[0].id));
    }
    const todoStyle = {
        textDecoration: todo.task[0].done ? "line-through" : "none",
    };
<<<<<<< HEAD
    const handleDeleteTodo = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete todo?");
        if (confirmDelete) {
            dispatch(deleteTodoList(todo.task[0].id));
        }
    }

    return (
        <li className="todoItem" style={todoStyle} >
            <span onClick={handleToggleDone}>{todo.task[0].text}</span>
            <button className="deleteButton " onClick={handleDeleteTodo}>x</button>
        </li>
=======

    return (
        <li className="todoItem" style={todoStyle} onClick={handleToggleDone}>{todo.text}</li>
>>>>>>> parent of 1187054 (feat: functional deleteTodo)
    )
};

export default TodoItem;