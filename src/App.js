import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="nav-bar">
        <nav>
          <ul>
            <li><a href={'/'}>Home </a></li>
            <li><a href={'/done'}>Done List </a></li>
            <li><a href={'/help'}>Help </a></li>
          </ul>
        </nav>
      </div>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
