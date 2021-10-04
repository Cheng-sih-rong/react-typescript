import './Location.scss'
import {useLocation} from 'react-router-dom';

function Location(){
 const ifo= useLocation()
console.log(ifo.state)
    return(
    <div className="wrapper">
        <h1><span>useLocation資訊:</span></h1>
        {/* <p>{ifo.state[1]}</p> */}
    </div>
    )
}

export default Location;