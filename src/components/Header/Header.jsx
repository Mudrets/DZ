import './Header.scss'
import {Link} from "react-router-dom"

const Header = () => {
    return(
        <div id='header'>
            <Link id='logo' to='/'>
                Contact List
            </Link>
            <div id="secondBar">
                <Link id='add_new' to='/new-contact'>Add new</Link>
            </div>
        </div>
    )
}
export default Header