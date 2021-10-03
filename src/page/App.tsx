import React,{useState} from 'react';
// import {  Route ,Switch} from 'react-router-dom';
import {  Route, Switch,Link,useHistory ,NavLink} from 'react-router-dom';
// import {  Route, Switch,Link,useHistory} from 'react-router-dom';
import './App.scss';
// import Modal from '../contanier/NormalModal';
// import Test from '../contanier/Test/Test';
import One from '../contanier/One/One';
import Two from '../contanier/Two/Two';
import Button from '../component/Button';
function Home(){
  return(
  <h1>
    HOME
  </h1>)
}
const activeStyle:object = {
  fontWeight: 'bolder',
  color: 'green'
};

function App() {
 
  const [path,setPath]=useState(1)

  const goPath =useHistory();
  const togglePath = ()=>{
    setPath(path===1?2:1) 
    goPath.push(`/${path}`)
  }

  const dontGo=()=>{
    return false
  }

  return (
    // <Switch>
    <div className="App wrap">
      <div className="margin-bottom-10  flex">
      <Link to="/home" >首頁</Link>
      <Link to="/1" className="nav">路由1</Link>
      <Link to={{
  pathname: '/2',
  search: '?sort=name',
  hash: '#the-hash',
  state: {
    fromDashboard: true
  }}}>路由２</Link>
  

      </div>
      <div className="margin-bottom-10  flex">
      
      <NavLink to="/home">Nav首頁</NavLink>
      <NavLink to="/1" activeClassName="thick">路由1:activeClassName</NavLink>
      <NavLink to="/2" activeStyle={activeStyle}>路由2:activeStyle</NavLink>
      <NavLink to="/2" isActive={dontGo}>路由2:isActive</NavLink>
      

      </div>
      {/* <Modal /> */}
      {/* <Test /> */}
      <div className="margin-bottom-10  flex">
        <div onClick={()=>goPath.push('/home') }><Button  content="回首頁"></Button></div>
        <div onClick={togglePath}><Button content="切換route"></Button></div></div> 
      
       
      
        {/* <One></One>
        <Two></Two>  */}
      <Switch>
          {/* <Redirect from='/1'to="/1" /> */}
          <Route  path='/home' component={Home} />
          <Route  path='/1' component={One} />
          <Route  path='/2' component={Two} />  
          
          
      </Switch>
      {/* <Redirect  to="/home" /> */}
      {/* <Route  path='/1' component={One} /> */}
      
      

    </div>
    /* </Switch> */
  );
}

export default App;
