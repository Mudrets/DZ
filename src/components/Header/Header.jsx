import './Header.scss'
import {Link} from "react-router-dom"
import { useSelector} from 'react-redux'
const Header = () => {
    const contacts = useSelector(state => state.contacts)
    return(
        <div id='header'>
            <Link id='logo' to='/'>
                Contact List
            </Link>
            <div id="secondBar">
                <Link id='add_new' to='/new-contact'>Add new</Link>
                <button onClick={()=>console.log(contact)}>Log</button>
                <input placeholder='Search' type="text" />
            </div>
        </div>
    )
}
export default Header