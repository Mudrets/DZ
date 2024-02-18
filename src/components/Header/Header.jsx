import './Header.scss'
import {Link} from "react-router-dom"
import { useSelector,useDispatch} from 'react-redux'
import { isAdding,isUpdating,searchContact,statusFilter } from '../../redux/action'
const Header = () => {
    const Adding = useSelector(state => state.isAdding)
    const Updating = useSelector(state => state.isUpdating)
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)
    const handleAdd = () => {
        if(!Adding){
            dispatch(statusFilter('all'))
            dispatch(searchContact(''))
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
                <button type='button' onClick={()=>{console.log(contacts)}}>log</button>
                <input placeholder='Search' {...(Adding||Updating[0])&&{ disabled: true, value:'' }} type="text" onChange={(e)=>{dispatch(searchContact(e.target.value))}}/>
            </div>
        </div>
    )
}
export default Header