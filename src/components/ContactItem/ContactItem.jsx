import './ContactItem.scss'
import {useState} from 'react' 
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import UpdateContact from '../UpdateContact/UpdateContact'
import {Link} from "react-router-dom"
const ContactItem = ({contact,deleter,changer,changeContact}) => {
    return(
        <div id={contact.id} className="container ContactItem">
            <div className='row ps-4 pe-4 pb-3 pt-3'>
                <div style={{backgroundImage: `url(https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg)`}} className='col-3 avatar me-4'></div>
                <div className='col-9'>
                <div className='tag bg_blue mb-4'>{contact.status}</div>
                <span className='text4 c_black d-block mb-2'>{contact.name}</span>
                <span className='text3 c_black d-block'>{contact.phone}</span>
                <span className='text2 c_gray d-block'>{contact.email}</span>
                </div>
                <div className='col-1 buttons'>
                <Link to={`update-contact/${contact.id}`} onClick={() => changeContact(contact)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/> </svg>
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { deleter(contact.id,contact.status)}} className='trash' width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"/> </svg>
                {!contact.favorite&&<svg className='star' onClick={() => changer(contact.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>}
                {contact.favorite&&<svg className='star favorite' onClick={() => changer(contact.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>}
                </div>
            </div>
        </div>
    )
}
export default ContactItem

