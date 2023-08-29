import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "Todos",
    initialState: [
        { id: 1, text: "display your input todo ", done: false },
        { id: 2, text: "To finish the homework", done: false },
    ],
    reducers: {
        updateTodoList: (state, action) => {
            const newTodo = {
                id: state.length + 1,
                text: action.payload,
                done: false,
            };
            state.push(newTodo);
        },
    },
});
export const { updateTodoList } = todoSlice.actions;
export default todoSlice.reducer;