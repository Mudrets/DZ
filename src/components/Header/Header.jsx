import './Header.scss'
import {Link} from "react-router-dom"
import { useDispatch,useSelector} from 'react-redux'
import { isAdding,isUpdating } from '../../redux/action'
const Header = () => {
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()
    const handleAdd = (bool) => {
        dispatch(isAdding(true))
        dispatch(isUpdating(true,'id'))
      }
    return(
        <div id='header'>
            <Link id='logo' to='/'>
                Contact List
            </Link>
            <div id="secondBar">
                <Link id='add_new' onClick={()=>handleAdd(true)} >Add new</Link>
            <button onClick={()=>{console.log(contacts)}}>log</button>
                <input placeholder='Search' type="text" />
            </div>
        </div>
    )
}
export default Header