import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoList",
    initialState: [
        { id: 1, text: "To finish the homework", done: false },
    ],
    reducers: {
        updateTodoList: (state, action) => {
            const id = state.length + 1;
            const newTodo = {
                id: id,
                text: action.payload.text,
                done: false,
            };
            state.push(newTodo);
        },
        toggleTodoStatus: (state, action) => {
            const todo = state.find((item) => item.id === action.payload);
            if (todo) {
                todo.done = !todo.done;
            }
        },
    },
});
export const { updateTodoList,toggleTodoStatus} = todoSlice.actions;
export default todoSlice.reducer;