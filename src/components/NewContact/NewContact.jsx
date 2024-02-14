import { validationSchema } from '../../assets/validation/validation'
import { useNavigate } from 'react-router-dom'
import './Contact.scss'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { addContact } from '../../redux/action'
const NewContact = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const contacts = useSelector(state => state.contacts)
    const initialValues = {
        id:uuidv4(),
        name:'',
        phone:'',
        email:'',
        avatar:'',
        gender:'',
        status:'',
        favorite:false
    }
    const handleSubmit = (values) => {
        dispatch(addContact(values))
        navigate('/')
    }
    const [addStatus,setAddStatus]= useState(false)
    const statusClear=[...new Set(contacts.map((el) => el.status.toLowerCase()))];
    return(
        <div className=' container d-flex justify-content-center'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {()=>(
                <Form className='newContact p-4'>
                    <span className='nc'>New Contact</span>
                <div className='label m-2'>
                    <Field placeholder='Name' className='n' type='text' name='name' id='name'/>
                    <ErrorMessage className='text2 mt-2' component='span' name='name'/>
                </div>
                <div className='label m-2'>
                    <Field placeholder='Phone' className='phone' type='number' name='phone' id='phone'/>
                    <ErrorMessage className='text2 mt-2' component='span' name='phone'/>
                </div>
                <div className='label m-2'>
                    <Field placeholder='Email' className='e' type='text' name='email' id='email'/>
                    <ErrorMessage className='text2 mt-2' component='span' name='email'/>
                </div>
                <div className='label m-2'>
                    <Field name='gender' className='g' as='select'>
                        <option value="" disabled selected hidden>Choose gender</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </Field>
                    <ErrorMessage className='text2 mt-2' component='span' name='gender'/>
                </div>
                <div className='label m-2'>
                {statusClear.length>0&&!addStatus&&<Field className='s' name='status' as='select' onClick={(e) => {
                        if (e.target.value==='new status') {setAddStatus(true)}else{setAddStatus(false)}
                    }}>
                        <option value="" disabled selected hidden>Choose status</option>
                        {statusClear.map((status)=>(<option value={status}>{status}</option>))}
                        <option value="new status">add new status</option>
                    </Field>}
                    {addStatus&&<Field id='statInp' name='status' as='input' placeholder='New status'></Field>}
                    {statusClear.length<1&&<Field id='statInp' name='status' as='input' placeholder='New status'></Field>}
                    <ErrorMessage className='text2 mt-2' component='span' name='status'/>
                </div>
                <div className='label m-2'>
                <Field placeholder='avatar link' type='text' className='a' name='avatar' id='avatar'/>
                </div>
                <ErrorMessage className='text2 mt-2' component='span' name='avatar'/>
                <div className='check m-2 mb-2'>
                <label className='me-2' htmlFor='favorite'>Favorite</label>
                <Field type='checkbox' name='favorite' id='favorite'/>
                </div>
                <button type='submit'>ADD</button>
                </Form>
            )}
        </Formik>
        </div>
    )
}
export default NewContact