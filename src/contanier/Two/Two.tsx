import React from 'react';
// import {useParams, useRouteMatch ,useLocation} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import './Two.scss'

function Two(){
    // let  id  = useParams()
    // let { path, url } = useRouteMatch()
    // luseLocation();
    console.log(useLocation())
    return(
    <div className="wrapper">
        <h1><span>route:</span>2</h1>
        {/* <div>{id}、{path}、{url}</div> */}
    </div>
    )
}

export default Two;