import './ContactItem.scss'
import { validationSchema } from '../../assets/validation/validation'
import {Link} from "react-router-dom"
import { changeFavorite, deleteContact,isUpdating } from '../../redux/action'
import { useSelector,useDispatch} from 'react-redux'
import {Formik,Form,Field,ErrorMessage} from 'formik'
const ContactItem = ({contact}) => {
    const Updating = useSelector(state => state.isUpdating)
    const dispatch = useDispatch()
    const handleDeleteContact = (id) => {
        dispatch(deleteContact(id))
    }
    const handleChangeFavorite = (id) => {
        dispatch(changeFavorite(id))
    }
    const handleUpdateContact = (id) => {
        dispatch(isUpdating(true,id))
    }
    const handleSubmit = (values) => {
        handleUpdateContact(values)
        navigate('/')
    }
    const initialValues = {
        id:contact.id,
        name:contact.name,
        phone:contact.phone,
        email:contact.email,
        avatar:contact.avatar,
        gender:contact.gender,
        status:contact.status,
        favorite:contact.favorite
    }
    return(
            // <form initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} style={{backgroundImage: `url(${contact.avatar})`}} id={contact.id} className={`ContactItem ${Updating[0]&&Updating[1]!==contact.id&&'none'} ${Updating[0]&&Updating[1]===contact.id&&'updating'}`}>
            //     {Updating[0]&&<input className='name' id='name' name='name'/>}
            //     {!Updating[0]&&<input className='name' disabled value={contact.name}/>}
            //     <input className='avatar'  value={contact.avatar}/>
            //     {Updating[0]&&<input className='status' disabled  value={contact.status}/>}
            //     {!Updating[0]&&<input className='status' disabled  value={contact.status}/>}
            //     <div className='info'>
            //     <select defaultValue={contact.gender} className='gender' name="" id="">
            //         <option value="men">Men</option>
            //         <option value="women">Women</option>
            //     </select>
            //     {!Updating[0]&&<input className='phone' disabled  value={contact.phone}/>}
            //     {Updating[0]&&<input className='phone'  value={contact.phone}/>}
            //     {!Updating[0]&&<input className='email' disabled  value={contact.email}></input>}
            //     {Updating[0]&&<input className='email'  value={contact.email}></input>}
            //     </div>
            //     <div className='btns'>
            //     {!Updating[0]&&<Link className='b' onClick={()=>handleUpdateContact(contact.id)} to={`update-contact/${contact.id}`}>
            //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/> </svg>
            //     </Link>}
            //     {Updating[0]&&<Link type='submit' className='b' to={`/`}>
            //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
            //     </Link>}
            //     {!Updating[0]&&<div className='b'>
            //     <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { handleDeleteContact(contact.id)}} className='trash' width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"/> </svg>
            //     </div>}
            //     <div className='b'>
            //     {!contact.favorite&&<svg className='star' onClick={() => handleChangeFavorite(contact.id)} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"  viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>}
            //     {contact.favorite&&<svg className='star favorite' onClick={() => handleChangeFavorite(contact.id)} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>}
            //     </div>
            //     </div>
            // </form>
            <div style={{backgroundImage: `url(${contact.avatar})`}} id={contact.id} className={`ContactItem`}>
                <div className={Updating[0]&&Updating[1]!==contact.id&&'pelena'}></div>
                <span className='name'>{contact.name}</span>
                <div className='status'>{contact.status}</div>
                <div className='info'>
                <span className='phone'>{contact.phone}</span>
                <span className='email'>{contact.email}</span>
                </div>
                {!Updating[0]&&<div className='btns'>
                <Link className='b' onClick={()=>handleUpdateContact(contact.id)} to={`update-contact/${contact.id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/> </svg>
                </Link>
                <div className='b'>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { handleDeleteContact(contact.id)}} className='trash' width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"/> </svg>
                </div>
                <div className='b'>
                {!contact.favorite&&<svg className='star' onClick={() => handleChangeFavorite(contact.id)} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"  viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>}
                {contact.favorite&&<svg className='star favorite' onClick={() => handleChangeFavorite(contact.id)} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>}
                </div>
                </div>}
            </div>
    )
}
export default ContactItem

// import './ContactItem.scss'
// import {useState} from 'react' 
// import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
// import UpdateContact from '../UpdateContact/UpdateContact'
// import {Link} from "react-router-dom"
// const ContactItem = ({contact,deleter,changer,changeContact,isUpdating}) => {
//     return(
//             <div style={{backgroundImage: `url(${contact.avatar})`}} id={contact.id} className="ContactItem">
//                 {isUpdating[0]&&isUpdating[1]!==contact.id&&<div className='pelena'><div className='infoP'></div></div>}
//                 {/* <div style={{backgroundImage: `url(https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg)`}} className="avatar"> */}
//                 {/* <div  className="avatar">
//                 </div> */}
//                 <span className='firstName'>{contact.name.split(" ")[0]}</span>
//                 <span className='lastName'>{contact.name.split(" ")[1]}</span>
//                 <div className='status'>{contact.status}</div>
//                 <div className='info'>
//                 <span className='phone'>{contact.phone}</span>
//                 <span className='email'>{contact.email}</span>
//                 </div>
//                 {!isUpdating[0]&&<div className='btns'>
//                 <Link className='b' to={`update-contact/${contact.id}`} onClick={() => changeContact(contact)}>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/> </svg>
//                 </Link>
//                 <div className='b'>
//                 <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { deleter(contact.id,contact.status)}} className='trash' width="16" height="16" fill="currentColor"  viewBox="0 0 16 16"> <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"/> </svg>
//                 </div>
//                 <div className='b'>
//                 {!contact.favorite&&<svg className='star' onClick={() => changer(contact.id)} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"  viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>}
//                 {contact.favorite&&<svg className='star favorite' onClick={() => changer(contact.id)} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>}
//                 </div>
//                 </div>}
//             </div>
//     )
// }
// export default ContactItem

