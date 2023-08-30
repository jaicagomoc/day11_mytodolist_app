import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todoList",
    initialState: { task: [] }, 
    reducers: {
        resetTodoList: (state, action) => {
            state.todoList = action.payload;
         },
        updateTodoList: (state, action) => {
            const newId = state.task.length + 1;
            const newTodo = {
                id: newId,
                text: action.payload.text,
                done: false,
            };
            state.task.push(newTodo);
        },
        toggleTodoStatus: (state, action) => {
            const todo = state.task.find((item) => item.id === action.payload);
            if (todo) {
                todo.done = !todo.done;
            }
        },
        deleteTodoList: (state, action) => {
            state.task = state.task.filter((todo) => todo.id !== action.payload);
        }
    },
});

export const { updateTodoList, toggleTodoStatus, deleteTodoList } = todoSlice.actions;
export default todoSlice.reducer;
