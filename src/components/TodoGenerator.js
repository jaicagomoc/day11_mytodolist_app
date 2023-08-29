import { useDispatch } from "react-redux";
import { updateTodoList } from "./todoSlice";
import "./css/TodoGenerator.css"
import { useState } from "react";

const TodoGenerator = () => {
    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState(" ");

    const handleInputChange = (event) => {
        dispatch(updateTodoList(event.target.value))
    };
    const handleAddTodo = () =>{
        dispatch(updateTodoList({}))
    };



    return (
        <div className="todoGenerator">
            <input type="text" onChange={handleInputChange}
                placeholder="Enter a new todo" />
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
    );
};

export default TodoGenerator;
