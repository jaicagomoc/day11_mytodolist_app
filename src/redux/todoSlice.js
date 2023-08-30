import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { task: [{id: 1, text: "To finish the homework", done: false}] },
    ],
    reducers: {
        updateTodoList: (state, action) => {
            const Id = state.length + 1;
            const newTodo = {
                id:Id,
                task: [
                  {  id: Id,
                    text: action.payload.text,
                    done: false,}]
            };
            state.push(newTodo);
        },
        toggleTodoStatus: (state, action) => {
            const todo = state.find((item) => item.id === action.payload);
            if (todo) {
                todo.task[0].done = !todo.task[0].done;
            }
        },
        deleteTodoList: (state, action) => {
            return state.filter((todo) => todo.task[0].id !== action.payload);
        }
    },
});
export const { updateTodoList, toggleTodoStatus, deleteTodoList } = todoSlice.actions;
export default todoSlice.reducer;