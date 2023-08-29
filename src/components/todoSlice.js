const todoSlice = createSlice({
   name: "Todo",
   initialState: {
      todoList: [{}]
   },
   reducers: {
      updateTodoList: (state, action) => {
         state.todoList.push(action.payload)
      },
   },
});
export const { updateTodoList } = counterSlice.actions;
export default todoSlice.reducer;