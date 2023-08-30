import React from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import "./css/TodoList.css";
import { useSelector } from "react-redux";
import axios from "axios";


const TodoList = (props) => {
    const todos = useSelector((state) => state.todoList);
    const api = axios.create({
        baseURL: 'https://64ee1b751f87218271425136.mockapi.io/api/v1/'
    });
    api.get('/todos').then(response => console.log (response));
    return (
        <div className="todoListContainer">
            <h2 className="todoListTitle"> Todo List</h2>
            <div className="todoListComponents">
                <TodoGroup todos={todos} />
                 {!props.isDone && <TodoGenerator/>}
            </div>
        </div>
    );
};
export default TodoList;