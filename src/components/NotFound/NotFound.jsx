import './NotFound.scss'
import error from '../../assets/img/404-error.png'
import {Link} from "react-router-dom"

const NotFound = () => {
    return(
        <div id='error'>
        <img src={error} alt="" />
        <h1>NotFound</h1>
        <Link id="back" to='/'>
            Back
        </Link>
        </div>
    )
}
export default NotFound