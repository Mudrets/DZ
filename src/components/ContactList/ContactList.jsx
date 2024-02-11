import './ContactList.scss'
import Button from '../Button/Button'
import TopBar from '../TopBar/TopBar'
import {useState} from 'react' 
import ContactItem from '../ContactItem/ContactItem'
const ContactList = ({deleteContact,changeFav,store,changeContact,newStatus}) => {
    const [statusFilter,setFilterStatus]= useState('all')
    function filterStatus(keepStatus){
        setFilterStatus(prevStat=>keepStatus)
    }
    return(
        <div className='container p-0'>
        <TopBar filter={filterStatus} active={statusFilter} store={store}></TopBar>
        <div id='contacts'>
            {statusFilter!=='all'&&store.filter(item => item.status === statusFilter).map((el)=>(<ContactItem changeContact={changeContact} deleter={deleteContact} newStatus={newStatus} changer={changeFav} contact={el} key={el.id}></ContactItem>))}
            {statusFilter==='all'&&store.map((el)=>(<ContactItem changeContact={changeContact} deleter={deleteContact} newStatus={newStatus} changer={changeFav} contact={el} key={el.id}></ContactItem>))}
        </div>
        </div>
    )
}
export default ContactList