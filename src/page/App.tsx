import React,{useState} from 'react';
import {  Route, Switch,useHistory } from 'react-router-dom';
import './App.scss';
// import Modal from '../contanier/NormalModal';
// import Test from '../contanier/Test/Test';
import One from '../contanier/One/One';
import Two from '../contanier/Two/Two';
import Button from '../component/Button';
function Home(){
  return(
  <h1>
    請按上方按鈕切換route
  </h1>)
}

function App() {
  const goPath =useHistory();
  const [path,setPath]=useState(1)

  const togglePath = ()=>{
    
    setPath(path===1?2:1) 
    goPath.push(`/${path}`)
  }

  return (
    <Switch>
    <div className="App wrap">
      {/* <Modal /> */}
      {/* <Test /> */}
      <div className="margin-bottom-10  flex">
        <div onClick={()=>goPath.push('/') }><Button  content="回首頁"></Button></div>
        <div onClick={togglePath}><Button content="切換route"></Button></div></div>
      
        <div className="flex">
      
        {/* <One></One>
        <Two></Two>  */}
          <Route exact path='/' component={Home} />
          <Route exact path='/1' component={One} />
          <Route exact path='/2' component={Two} />  
      
      </div>
      

    </div>
    </Switch>
  );
}

export default App;
