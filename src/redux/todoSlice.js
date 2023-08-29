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
            return [...state, newTodo];
        },
    },
});
export const { updateTodoList } = todoSlice.actions;
export default todoSlice.reducer;