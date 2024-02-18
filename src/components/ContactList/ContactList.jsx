import './ContactList.scss'
import ContactItem from '../ContactItem/ContactItem'
import { useSelector} from 'react-redux'
import SideBar from '../SideBar/SideBar'
import NewContact from '../NewContact/NewContact'
const ContactList = () => {
    const contacts = useSelector(state => state.contacts)
    const statusFilter = useSelector(state => state.statusFilter)
    const nameFilter = useSelector(state => state.searchTerm)
    const isAdding = useSelector(state => state.isAdding)
    return(
        <>
        <SideBar/>
        <div id='contacts' className={`${'over_hiden'}`}>
            {isAdding&&<NewContact/>}
            {nameFilter===''&&statusFilter!=='all'&&contacts.filter(item => item.status === statusFilter).map((el)=>(<ContactItem contact={el} key={el.id}></ContactItem>)).reverse()}
            {nameFilter===''&&statusFilter==='all'&&contacts.map((el)=>(<ContactItem contact={el} key={el.id}></ContactItem>)).reverse()}
            {nameFilter!==''&&statusFilter!=='all'&&contacts.filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase())&&item.status === statusFilter).map((el)=>(<ContactItem contact={el} key={el.id}></ContactItem>)).reverse()}
            {nameFilter!==''&&statusFilter==='all'&&contacts.filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase())).map((el)=>(<ContactItem contact={el} key={el.id}></ContactItem>)).reverse()}
        </div>
        </>
    )
}
export default ContactList


// import './ContactList.scss'
// import ContactItem from '../ContactItem/ContactItem'
// const ContactList = ({deleteContact,changeFav,store,changeContact,newStatus,statusFilter,isUpdating}) => {
//     return(
//         <>
//         <div id='contacts'>
//             {statusFilter!=='all'&&store.filter(item => item.status === statusFilter).map((el)=>(<ContactItem isUpdating={isUpdating} changeContact={changeContact} deleter={deleteContact} newStatus={newStatus} changer={changeFav} contact={el} key={el.id}></ContactItem>))}
//             {statusFilter==='all'&&store.map((el)=>(<ContactItem changeContact={changeContact} deleter={deleteContact} isUpdating={isUpdating} newStatus={newStatus} changer={changeFav} contact={el} key={el.id}></ContactItem>))}
//         </div>
//         </>
//     )
// }
// export default ContactList