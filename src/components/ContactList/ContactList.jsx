import './ContactList.scss'
import Button from '../Button/Button'
import TopBar from '../TopBar/TopBar'
import {useState} from 'react' 
import ContactItem from '../ContactItem/ContactItem'
const ContactList = (props) => {
    return(
        <div className='container p-0'>
        <TopBar counters={props.counters}></TopBar>
        <div id='contacts'>
            {props.store.map((el)=>(<ContactItem deleter={props.deleteContact} changer={props.changeFav} favorite={el.favorite} avatar={el.avatar} gender={el.gender} key={el.id} id={el.id} status={el.status} name={el.name} number={el.phone} email={el.email}></ContactItem>))}
        </div>
        </div>
    )
}
export default ContactList