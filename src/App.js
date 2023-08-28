import React from 'react'
import TodoGroup from './components/TodoGroup'

function App() {
  const todoListItem = ["To finish homework", "To review for tomorrow", "To revisit some topics"];
  return (
    <>
      <h2 className="title"> Todo List</h2>
      <TodoGroup todos={todoListItem} />
    </>

  );
}

export default App;