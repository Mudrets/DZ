import * as Yup from 'yup'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import './NewContact.scss'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
const NewContact = ({onNewContact,store}) => {
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
    const digitsOnly = (value) => /^[\d+]+$/.test(value)
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(2).max(20).matches(/^[^\d]*$/,'Name must consist only of letters').required('Name is required'),
        phone: Yup.string().min(8).max(12).required('Phone is required').test('Digits only', 'Number should have digits only', digitsOnly),
        email: Yup.string().email('Invalid email').required('Email is required'),
        avatar: Yup.string().required('Avatar is required'),
        gender: Yup.string().oneOf(['men', 'women'], 'Invalid gender').required('Gender is required'),
        status: Yup.string().required('Status is required').max(10),
        favorite: Yup.boolean()
      })
    const navigate = useNavigate()
    const handleSubmit = (values,{setSubmitting}) => {
        onNewContact(values)
        console.log(values)
        setSubmitting(true)
        navigate('/')
    }
    const [addStatus,setAddStatus]= useState(false)
    const statusClear=[...new Set(store.map((el) => el.status.toLowerCase()))];
    return(
        <div className=' container d-flex justify-content-center'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {()=>(
                <Form className='newContact p-4 mt-5'>
                    <span className='text3 c_yellow'>New Contact</span>
                <div className='label m-2'>
                    <Field placeholder='Name' type='text' name='name' id='name'/>
                    <ErrorMessage className='c_red text2 mt-2' component='span' name='name'/>
                </div>
                <div className='label m-2'>
                    <Field placeholder='Phone' className='phone' type='number' name='phone' id='phone'/>
                    <ErrorMessage className='c_red text2 mt-2' component='span' name='phone'/>
                </div>
                <div className='label m-2'>
                    <Field placeholder='Email' type='text' name='email' id='email'/>
                    <ErrorMessage className='c_red text2 mt-2' component='span' name='email'/>
                </div>
                <div className='label m-2'>
                    <Field name='gender' as='select'>
                        <option value="" disabled selected hidden>Choose gender</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </Field>
                    <ErrorMessage className='c_red text2 mt-2' component='span' name='gender'/>
                </div>
                <div className='label m-2'>
                {statusClear.length>0&&!addStatus&&<Field name='status' as='select' onClick={(e) => {
                        if (e.target.value==='new status') {setAddStatus(true)}else{setAddStatus(false)}
                    }}>
                        <option value="" disabled selected hidden>Choose status</option>
                        {statusClear.map((status)=>(<option value={status}>{status}</option>))}
                        <option value="new status">add new status</option>
                    </Field>}
                    {addStatus&&<Field id='statInp' name='status' as='input' placeholder='New status'></Field>}
                    {statusClear.length<1&&<Field id='statInp' name='status' as='input' placeholder='New status'></Field>}
                    <ErrorMessage className='c_red text2 mt-2' component='span' name='status'/>
                </div>
                <div className='check m-2 mb-2'>
                <label className='text2 c_gray sp' htmlFor='avatar'>Avatar number</label>
                <Field placeholder='#' type='number' min="0" max="99" name='avatar' id='avatar'/>
                </div>
                <ErrorMessage className='c_red text2 mt-2' component='span' name='avatar'/>
                <div className='check m-2 mb-2'>
                <label className='text2 c_black me-2' htmlFor='favorite'>Favorite</label>
                <Field type='checkbox' name='favorite' id='favorite'/>
                </div>
                <Button type='submit' color='black' bg='red' text='Add'/>
                </Form>
            )}
        </Formik>
        </div>
    )
}
export default NewContact