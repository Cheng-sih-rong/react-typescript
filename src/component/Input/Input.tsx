import React from 'react';
// import { useHistory}  from 'react-router-dom';
import Button from '../Botton/Button';
import './Input.scss'



function Input(prop:any) {
  const inputStyle={
    width:prop.width?`${prop.width}px`:`100%`
  }
 
  return (
    <div className="input flex" style={inputStyle} >
      <input type="text" /><Button content="新增事項"/>
    </div>
  );
}

export default Input;
