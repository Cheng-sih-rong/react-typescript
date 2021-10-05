import React from 'react';
import './Button.scss'
// import  from 'react-router-dom';
// import './Header.scss';

// const btnType ={

// }


function Button(props:any) {
const typeStyle = function(){
    if(!props.type) return 'rgb(113, 95, 78)'
    if(props.type==="detele") return 'red'
    
}    

const style ={
    backgroundColor:typeStyle()
}

  return (
    <div className="button">
        <button style={style} >{props.content}</button>
    </div>
  );
}

export default Button;
