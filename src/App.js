import React from 'react';
import './App.css';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="nav-bar">
        <nav>
          <ul>
            <li><NavLink to={'/'}>Home </NavLink></li>
            <li><NavLink to={'/done'}>Done List </NavLink></li>
            <li><NavLink to={'/help'}>Help </NavLink></li>
          </ul>
        </nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
