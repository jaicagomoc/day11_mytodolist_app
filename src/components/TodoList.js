import React, { useState } from "react";
import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import "./css/TodoList.css";

const TodoList = () => {
//     const [todos, setTodos] = useState([
//         "To finish homework",
//         "To review for tomorrow",
//         "To revisit some topics"
//     ]);

//     const addTodo = (newTodo) => {
//         setTodos([...todos, newTodo]);
//     };
const todoList = useSelector((state) => state.Todo.todoList);


    return (
        <div className="todoListContainer">
            <h2 className="todoListTitle"> Todo List</h2>
            <div className="todoListComponents">
                <TodoGroup todoList={todoList} />
                <TodoGenerator />
            </div>
        </div>
    );
};

export default TodoList;
