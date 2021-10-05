import React from 'react';
import {  Route } from 'react-router-dom';
import './App.scss';
import Header from './container/Header/Header';
import List from './container/List/List';
import Input from './component/Input/Input';



function App() {
  <Route  path="/undo" />
  
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Input />
        <div className="list-wrapper">
        <Route  path="/undo" component={List}/>
        <Route  path="/done" component={List}/>
        </div>
      </div>
    </div>
  )
}

export default App;
