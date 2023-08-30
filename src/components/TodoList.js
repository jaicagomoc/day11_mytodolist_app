import React, { useEffect } from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import "./css/TodoList.css";
import { useDispatch, useSelector } from "react-redux";
import { resetTodoList } from "../redux/todoSlice";
import { getTodoTasks } from "../api/todoApi"; 

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todoList.task);

    useEffect(() => {
        // Fetch todo tasks and update the state
        getTodoTasks()
            .then(response => {
                console.log("API Response:", response.data); // Log the response data
                dispatch(resetTodoList(response.data));
            })
            .catch(error => {
                console.error("Error fetching todo tasks:", error);
            });
    }, [dispatch]);
    return (
        <div className="todoListContainer">
            <h2 className="todoListTitle"> Todo List</h2>
            <div className="todoListComponents">
                <TodoGroup todos={todos} />
                <TodoGenerator />
            </div>
        </div>
    );
};

export default TodoList;
