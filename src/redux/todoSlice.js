import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoList",
    initialState: [
        { task: { id: 1, text: "To finish the homework", done: true } },
    ],
    reducers: {
        updateTodoList: (state, action) => {
            const id = state.length + 1;
            const newTodo = {
                task: {
                    id: id,
                    text: action.payload.text,
                    done: false,
                }
            };
            state.push(newTodo);
        },
        toggleTodoStatus: (state, action) => {
            const todo = state.find((item) => item.task.id === action.payload);
            if (todo) {
                todo.task.done = !todo.task.done;
            }
        },
        deleteTodoList: (state, action) => {
            return state.filter((todo) => todo.task.id !== action.payload);
        }
    },
});

export const { updateTodoList, toggleTodoStatus, deleteTodoList } = todoSlice.actions;
export default todoSlice.reducer;
