import './Header.scss'
import {Link} from "react-router-dom"
import { useSelector,useDispatch} from 'react-redux'
import { isAdding,isUpdating } from '../../redux/action'
const Header = () => {
    const Adding = useSelector(state => state.isAdding)
    const dispatch = useDispatch()
    const handleAdd = () => {
        if(!Adding){
            dispatch(isAdding(true))
            dispatch(isUpdating(true,'id'))
        }
        else{
            dispatch(isAdding(false))
            dispatch(isUpdating(false,'id'))
        }
      }
    return(
        <div id='header'>
            <div id='logo'>
                Contact List
            </div>
            <div id="secondBar">
                <Link id='add_new' onClick={()=>handleAdd()} >Add new</Link>
                <input placeholder='Search' type="text" />
            </div>
        </div>
    )
}
export default Header