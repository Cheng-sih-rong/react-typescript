import React, { useRef } from 'react';
import './Test.css';


function Test() {
  
    const refText =useRef<any>(null)
    console.log(refText.current)
    const change=()=>{ 
        refText.current!.style.color= 'red'
    }


  return (
    <div >
      <button onClick={change}>
      Press Me
    </button>
      <p ref={refText}>
      color
    </p>
    </div>
  );
}

export default Test;