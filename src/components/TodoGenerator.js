import React, { useState } from "react";
import "./css/TodoGenerator.css"
import { useDispatch } from "react-redux";
import { updateTodoList } from "../redux/todoSlice";

const TodoGenerator = () => {
    const [newTodo, setNewTodo] = useState("");
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            dispatch(updateTodoList({ text: newTodo }))
            setNewTodo("");
        }
    };

    return (
        <div className="todoGenerator">
            <input type="text" value={newTodo} onChange={handleInputChange}
                placeholder="Enter a new todo" />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default TodoGenerator;