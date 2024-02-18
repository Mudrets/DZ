import './Header.scss'
import {Link} from "react-router-dom"
import { useDispatch} from 'react-redux'
import { isAdding,isUpdating } from '../../redux/action'
const Header = () => {
    const dispatch = useDispatch()
    const handleAdd = (bool) => {
        dispatch(isAdding(true))
        dispatch(isUpdating(true,'id'))
      }
    return(
        <div id='header'>
            <div id='logo'>
                Contact List
            </div>
            <div id="secondBar">
                <Link id='add_new' onClick={()=>handleAdd(true)} >Add new</Link>
                <input placeholder='Search' type="text" />
            </div>
        </div>
    )
}
export default Header