import React,{useState} from 'react';
import './NormalModal.css';


function Modal() {
  
  const [count,setCount] = useState(1)
  const title:string='年度成就'

  return (
    <div className="App">
      <div className="contanier center"> 
        <h2> {title}</h2>
        <p>{count}</p>
        <button onClick={()=>count< 5?setCount(count+1):setCount(1)}> Next </button>
      </div>
    </div>
  );
}

export default Modal;
