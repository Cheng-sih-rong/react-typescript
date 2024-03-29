import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './App.scss';
import Header from './container/Header/Header';
import List from './container/List/List';
import Button from './component/Botton/Button';
// const todoList =[{key:1,content:'買牛奶',done:false},{key:2,content:'繳費',done:true}]
//儲存原始資料
// const todoList: any = []


/*元件App*/
function App() {

  const [todoList,setTodoList]=useState<any>([])

  //  待辦和未完成分別的list
  function doneList(list: any) {
    return list.filter((item: any) => {
      return item.done && !item.delete
    })
  }
  function undoList(list: any) {
    return list.filter((item: any) => {
      return !item.done && !item.delete
    })
  }


  // let sendVal = {}

  /*輸入元件input*/
  function Input(prop: any) {
    const inputVal = useRef<any>(null)

    function getInputValue() {
      const value = inputVal.current.value
      if (inputVal.current.value === '') return
      else {
        setTodoList([...todoList,{ key: Date.now(), content: value, done: false }])
        // todoList.push({ key: Date.now(), content: value, done: false })
        // sendVal = { key: Date.now(), content: value, done: false, delete: false }
        console.log(todoList)
        inputVal.current.value = ''

      }
      // setSendList(todoList)
    }

    return (
      <div className="input flex" >
        <input type="text" ref={inputVal} />
        <div onClick={() => getInputValue()}>
          <Button content="新增事項" />
        </div>
      </div>
    );
  }
  /*輸入元件input 結束*/

/*完成刪除項目*/
// const [change, setChange] = useState(true)
// var getValList = [...showList]


  const deleteItem = function (index: any) {
    const list = todoList.filter((item: any)=>item['key'] !== index )
    // setChange(!change)
    setTodoList (list) 
    // setAaa(getValList)
    console.log(list)

  }

  const doneItem = function (index: any) {
    const list: any = todoList.map(function(item: any) {if(item['key'] === index) item['done'] = true ;return item})
    // setChange(!change)
    // console.log(change)
    // setAaa(list)
    setTodoList (list) 
  }
/*完成刪除項目*/


  // const [sendList, setSendList] = useState([])
  const location = useLocation()
  const changeFun = location.pathname === '/undo' ? undoList(todoList) : doneList(todoList)
  // const changeFun =location.pathname ==='/undo'?undoList(todoList):doneList(todoList)

  return (
    <div className="App">
      <Header />

      <div className="container">
        <Input />
        <div className="list-wrapper">
          <List show={[...changeFun]} fuc={{deleteItem,doneItem}} />
        </div>
      </div>
    </div>
  )
}

export default App;
