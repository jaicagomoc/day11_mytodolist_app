import React from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import "./css/TodoList.css";
import { useSelector } from "react-redux";


const TodoList = (props) => {
    const todos = useSelector((state) => state.todoList);
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