import './ContactList.scss'
import Button from '../Button/Button'
import TopBar from '../TopBar/TopBar'
import {useState} from 'react' 
import ContactItem from '../ContactItem/ContactItem'
const ContactList = ({deleteContact,changeFav,filter,store,changeContact,newStatus}) => {
    return(
        <div className='container p-0'>
        <TopBar filter={filter} store={store}></TopBar>
        <div id='contacts'>
            {store.map((el)=>(<ContactItem changeContact={changeContact} deleter={deleteContact} newStatus={newStatus} changer={changeFav} contact={el} key={el.id}></ContactItem>))}
        </div>
        </div>
    )
}
export default ContactList