import './SideBar.scss'
import { useSelector,useDispatch} from 'react-redux'
import { statusFilter } from '../../redux/action'
import { isUpdating,updateContact } from '../../redux/action'
const ContactList = () => {
    const Updating = useSelector(state => state.isUpdating)
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)
    const active = useSelector(state => state.statusFilter)
    const statusClear=[...new Set(contacts.map((el) => el.status.toLowerCase()))];
    function counts(arr) {
        const countMap = {};
        arr.forEach(element => {
          if (countMap[element]) {
            countMap[element]++;
          } else {
            countMap[element] = 1;
          }
        });
        return countMap;
      }
    const handleStatusFilter = (values) => {
      dispatch(statusFilter(values))
      navigate('/')
    }
    return(
        <>
        <div id="type_buttons_cotact_list">
          {/* {Updating[0]&&<div className='pelena'></div>} */}
            <div className='b_and_d'  key={'all'}>
            <span className='digit bg_red'>{contacts.length}</span>
            <button className={`button_special ${active==='all' &&'active'} ${active!=='all' &&'inActive'}`} onClick={()=>handleStatusFilter('all')} >All</button>
            </div>
            {statusClear.map((status)=>(
              <div className='b_and_d' key={status}>
              <span className='digit bg_red'>{counts(contacts.map((el) => el.status.toLowerCase()))[status.toLowerCase()]}</span>
            <button className={`button_special ${active===status &&'active'} ${active!==status &&'inActive'}`} onClick={()=>handleStatusFilter(status)} >{status}</button>
            </div>
            ))}
        </div>
        </>
    )
}
export default ContactList