import React from 'react';
import {NavLink}  from 'react-router-dom';
import './Header.scss';



function Header() {
  
  return (
    <div className="header flex-between">
    <h1>TodoList</h1>
    <ul className="flex nav gap">
      <NavLink to="/undo" >待辦項目</NavLink>
      <NavLink to="/done" >完成項目</NavLink>
    </ul>  
      
  
    </div>
  );
}

export default Header;
