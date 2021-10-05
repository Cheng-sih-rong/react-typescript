import React from 'react';
import {NavLink, useHistory}  from 'react-router-dom';
import './Header.scss';



function Header() {
const history=useHistory()
 function goPath(path:string){
    history.push(`/${path}`)
 }

  
  return (
    <div className="header flex-between">
    <h1>TodoList</h1>
    <ul className="flex nav gap">
      <li onClick={()=>goPath('undo')}>待辦項目</li>
      <li onClick={()=>goPath('done')}>完成項目</li>
    </ul>  
      
  
    </div>
  );
}

export default Header;
