import './SideBar.scss'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { deleteStatus,addStatus,statusFilter } from '../../redux/action'
const ContactList = () => {
    const Updating = useSelector(state => state.isUpdating)
    const statusList = useSelector(state => state.statusList)
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)
    const active = useSelector(state => state.statusFilter)
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
    const [newStat, setNewStat] = useState('');
    const handleChange = (e) => {
      setNewStat(e.target.value);
    };
    const handleDeleteStatus = (status) => {
      dispatch(deleteStatus(status))
    }
    const handleStatusFilter = (values) => {
      dispatch(statusFilter(values))
    }
    return(
        <>
        <div id="type_buttons_cotact_list">
              <div className='b_and_d'>
                <input onChange={handleChange} maxLength={10} placeholder='new status' type="text"  name="newStat"  value={newStat} />
                <button className='inActive' onClick={()=>{dispatch(addStatus(newStat))}}>add</button>
              </div>
              <div className='b_and_d'  key={'all'}>
                <div  className='d-flex'>
                <span className='digit'>{contacts.length}</span>
                <button {...(Updating[0] && { disabled: true })} className={`button_special ${active==='all' &&'active'} ${active!=='all' &&'inActive'}`} onClick={()=>handleStatusFilter('all')} >All</button>
                </div>
              </div>
            {statusList.map((status)=>(
              <div className='b_and_d' key={status}>
                <div className='d-flex'>       
                <span className='digit'>{counts(contacts.map((el) => el.status.toLowerCase()))[status.toLowerCase()] || 0}</span>
                <button  {...(Updating[0] && { disabled: true })} className={`button_special ${active===status &&'active'} ${active!==status &&'inActive'}`} onClick={()=>handleStatusFilter(status)} >{status}</button>
                </div>
                {status!=='other'&&<div className='d-flex'>
                <button  onClick={()=>handleDeleteStatus(status)} >
                <svg xmlns="http://www.w3.org/2000/svg" className='trash' width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"/> </svg>
                </button>
                </div>}
              </div>
            ))}
        </div>
        </>
    )
}
export default ContactList