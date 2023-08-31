import React, { useEffect } from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import "./css/TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { resetTodoList } from "../redux/todoSlice";
import { getTodoTasks } from "../api/todoApi"; 

const TodoList = (props) => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoList.task);

    useEffect(() => {
        getTodoTasks().then(response => {
                dispatch(resetTodoList(response.data));
            })
            .catch(error => {
            });
    }, [dispatch]);
    return (
        <div className="todoListContainer">
            <h2 className="todoListTitle"> Todo List</h2>
            <div className="todoListComponents">
                <TodoGroup todos={todos} />
                {!props.isDone && <TodoGenerator />}
            </div>
        </div>
    );
};

export default TodoList;
