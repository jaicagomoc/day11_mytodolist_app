import React, { useState } from "react";
import "./css/TodoGenerator.css"

const TodoGenerator = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleInputChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            addTodo(newTodo);
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