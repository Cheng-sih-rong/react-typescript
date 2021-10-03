import './One.scss'
import {useLocation} from 'react-router-dom';

function One(){
    console.log(useLocation())
    return(
    <div className="wrapper">
        <h1><span>route:</span>1</h1>
    </div>
    )
}

export default One;