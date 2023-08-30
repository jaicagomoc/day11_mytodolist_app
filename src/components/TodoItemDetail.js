import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ToDoItemDetail = () => {
    const { id } = useParams();
    const todos = useSelector((state) => state.todos.find(todo => todo.id === parseInt(id)));
    return (
        <div className="todo-detail">
            <h1>Todo Item Detail</h1>
            <div>{todos?.id}</div>
            <div>{todos?.text}</div>
        </div>
    );
}
export default ToDoItemDetail;