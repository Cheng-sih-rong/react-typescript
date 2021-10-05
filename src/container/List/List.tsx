import React,{useState} from 'react';
import {useLocation}  from 'react-router-dom';
import './List.scss';
import Button from '../../component/Botton/Button';
const todoList =[{key:1,content:'買牛奶',done:false},{key:2,content:'繳費',done:true}]

function doneList(list:any){
    return list.filter((item:any)=>{ 
      return  item.done
    })
}
function undoList(list:any){
    return list.filter((item:any)=>{ 
      return  !item.done
    })
}
// const todoList =[]






  // (
  //   <div>
  //     <div className="flex item-wrap">
  //       <p>{prop.contnet}</p>
  //       <div className="flex gap">
  //           <Button content="刪除" type="detele" />
  //            <Button content="完成" />
  //       </div>
         
  //     </div>
  //     <hr/>
  //   </div>
  // )


function List() {

//typescript
// interface item {
//   key: number;
//   content: string;
//   done:boolean;

// } 
const location  = useLocation()

  const [todoList,setTodoList]=useState([{key:1,content:'買牛奶',done:false},{key:2,content:'繳費',done:true}])  

  function getItem(value:string){
    const list = [...todoList]
    // const aa:item[]= {
    //   key:parseInt(Date.now()),
    //   content:value,done:false}
    // list.push(aa)
    setTodoList(list)
  
  }

  const deleteItem =function(index:any){
    console.log('dfdsdfdsf')
    const list = todoList.filter((item)=>{
          return item['key'] !== index
    })

    setTodoList(list)
  }

  const doneItem =function(index:any){

    const list:any = todoList.map((item:any)=>{
          if(item['key']===index) item['done']= true
    })
    setTodoList(list)
  }
  
  const itemLoop= function(list:Array<any>,){

    return list.map((item)=>{
       return (<div key={item.key}>
       <div className="flex item-wrap">
         <p>{item.content}</p>
         <div className="flex center gap">
             <div onClick={()=>deleteItem(item.key)}><Button content="刪除" type="detele"  /></div>
            <div onClick={()=>doneItem(item.key)}><Button content="完成" /></div>
         </div>
          
       </div>
       <hr/>
     </div>)
     })}

  const changeFun =location.pathname ==='/undo'?undoList(todoList):doneList(todoList)
     
 console.log(changeFun)
  return (
    <div className="content-edit wrap">
      <div className="title">
          <h3>{location.pathname ==='/undo'?'待辦項目':'完成項目'}</h3>
          {`(${changeFun.length>0?`你有${changeFun.length}個未完成項目`:'目前無待辦項目'})`}
      </div>
      <div className="item">
      {itemLoop(changeFun)}
     </div>
    
  </div>
  );
}

export default List;
