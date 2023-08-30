import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./css/TodoItemDetails.css";

const TodoItemDetail = () => {
    const { id } = useParams();
    const todos = useSelector((state) => state.todoList.task.find(todo => todo.id === parseInt(id))); 
    return (
      <div className="todoDetails">
        <h1>Todo Item Detail</h1>
        <div>{todos?.id}</div>
        <div>{todos?.text}</div>
      </div>
    );
};

export default TodoItemDetail;
