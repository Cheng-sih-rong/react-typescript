import React from 'react';
// import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './List.scss';
import Button from '../../component/Botton/Button';


function List(prop: any) {

  const location = useLocation()
  const path = location.pathname
  const showList = prop.show
  console.log(showList)

  // const [aaa, setAaa] = useState(showList)
  var getValList = [...showList]


  // const deleteItem = function (index: any) {
  //   const list = showList.map((item: any) => item['key'] === index ? item['delete'] = true : item['delete'] = false)
  //   setChange(!change)
  //   getValList = list
  //   // setAaa(getValList)
  //   console.log(change)

  // }

  // const doneItem = function (index: any) {
  //   const list: any = showList.map((item: any) => item['key'] === index ? item['done'] = true : item['done'] = false)
  //   setChange(!change)
  //   console.log(change)
  //   // setAaa(list)
  //   getValList = list
  // }

  const btnDisplay = {
    display: path === '/done' ? 'none' : 'flex'
  }

  const title = path === '/undo' ? '待辦' : '完成'


  //項目

  const itemLoop = function (list: Array<any>,) {
    const deleteItem =prop.fuc.deleteItem
    const doneItem =prop.fuc.doneItem

    return list.map((item) => {
      return (<div key={item.key}>
        <div className="flex item-wrap">
          <p>{item.content}</p>
          <div className="flex center gap">
            <div onClick={() => deleteItem(item.key)}><Button content="刪除" type="detele" /></div>
            <div style={btnDisplay} onClick={() => doneItem(item.key)}><Button content="完成" /></div>
          </div>

        </div>
        <hr />
      </div>)
    })
  }


  return (
    <div className="content-edit wrap">
      <div className="title">
        <h3>{title + '項目'}</h3>
        {`(${prop.show.length > 0 ? `你有${prop.show.length}個${title}項目` : `目前無${title}項目`})`}
      </div>
      <div className="item">
        {itemLoop(getValList)}
      </div>

    </div>
  );
}

export default List;
