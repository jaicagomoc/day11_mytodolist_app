import React, { useState } from "react";

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
        <div className="todo-generator">
            <input type="text" value={newTodo} onChange={handleInputChange}
                placeholder="Enter a new todo" />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default TodoGenerator;
