import { validationSchema } from '../../assets/validation/validation'
import { useNavigate } from 'react-router-dom'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { useState } from 'react'
import { useEffect } from 'react';
import { isUpdating,updateContact } from '../../redux/action'
import { useSelector,useDispatch} from 'react-redux'
const UpdateContact = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts)
    const Updating = useSelector(state => state.isUpdating)
    const [addStatus,setAddStatus]= useState(false)
    const contact = contacts.find(contact => contact.id === Updating[1])
    const statusClear=[...new Set(contacts.map((el) => el.status.toLowerCase()))];
    const handleIsUpdating = (bool,id) => {
        dispatch(isUpdating(bool,id))
    }
    const handleUpdateContact = (contact) => {
        dispatch(updateContact(contact.id,contact))
    }
    useEffect(() => {
        handleIsUpdating(true,Updating[1])
        if (Updating[1]==='id') {
            navigate('/')
        }
        return () => {
        handleIsUpdating(false,'id')
        };
      }, [location.pathname]);
    let initialValues ={}
    if (contact===undefined) {
        return
    }
    else{
        initialValues = {
            id:contact.id,
            name:contact.name,
            phone:contact.phone,
            email:contact.email,
            avatar:contact.avatar,
            gender:contact.gender,
            status:contact.status,
            favorite:contact.favorite
        }
    }
    const handleSubmit = (values) => {
        handleUpdateContact(values)
        navigate('/')
    }
    return(
        <div className=' container d-flex justify-content-center'>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form className='newContact p-4'>
                <span className='nc'>Update Contact</span>
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
                <Field className='g' name='gender' as='select'>
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
            <Field placeholder='avatar link' className='a' type='text' name='avatar' id='avatar'/>
            </div>
            <ErrorMessage className='text2 mt-2' component='span' name='avatar'/>
            <div className='check m-2 mb-2'>
            <label className='me-2' htmlFor='favorite'>Favorite</label>
            <Field type='checkbox' name='favorite' id='favorite'/>
            </div>
            <button type='submit'>ADD</button>
            </Form>
        </Formik>
        </div>
    )
}
export default UpdateContact

// import * as Yup from 'yup'
// import Button from '../Button/Button'
// import { useNavigate,useParams } from 'react-router-dom'
// import {Formik,Form,Field,ErrorMessage} from 'formik'
// import {v4 as uuidv4} from 'uuid'
// import { useState } from 'react'
// import React, { useEffect } from 'react';
// const UpdateContact = ({changeContact,store,isUpdating,isUpdatingFunc}) => {
//     const contact = store.find(contact => contact.id === isUpdating[1])
//     useEffect(() => {
//             isUpdatingFunc(true,isUpdating[1])
//             if (isUpdating[1]==='id') {
//                 navigate('/')
//             }
//             return () => {
//             isUpdatingFunc(false,'id')
//         };
//       }, [location.pathname]);

//     const initialValues = {
//         id:contact.id,
//         name:contact.name,
//         phone:contact.phone,
//         email:contact.email,
//         avatar:contact.avatar,
//         gender:contact.gender,
//         status:contact.status,
//         favorite:contact.favorite
//     }
//     const digitsOnly = (value) => /^[\d+]+$/.test(value)
//     const validationSchema = Yup.object().shape({
//         name: Yup.string().min(2).max(20).matches(/^[^\d]*$/,'Name must consist only of letters').required('Name is required'),
//         phone: Yup.string().min(8).max(12).required('Phone is required').test('Digits only', 'Number should have digits only', digitsOnly),
//         email: Yup.string().email('Invalid email').required('Email is required'),
//         avatar: Yup.string().required('Avatar is required'),
//         gender: Yup.string().oneOf(['men', 'women'], 'Invalid gender').required('Gender is required'),
//         status: Yup.string().required('Status is required').max(10),
//         favorite: Yup.boolean()
//       })
//     const navigate = useNavigate()
//     const handleSubmit = (values) => {
//         changeContact(contact.id,values)
//         navigate('/')
//     }
//     const [addStatus,setAddStatus]= useState(false)
//     const statusClear=[...new Set(store.map((el) => el.status.toLowerCase()))];
//     return(
//         <div className=' container d-flex justify-content-center'>
//         <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//             {()=>(
//                 <Form className='newContact p-4'>
//                 <span className='nc'>Update Contact</span>
//             <div className='label m-2'>
//                 <Field placeholder='Name' className='n' type='text' name='name' id='name'/>
//                 <ErrorMessage className='text2 mt-2' component='span' name='name'/>
//             </div>
//             <div className='label m-2'>
//                 <Field placeholder='Phone' className='phone' type='number' name='phone' id='phone'/>
//                 <ErrorMessage className='text2 mt-2' component='span' name='phone'/>
//             </div>
//             <div className='label m-2'>
//                 <Field placeholder='Email' className='e' type='text' name='email' id='email'/>
//                 <ErrorMessage className='text2 mt-2' component='span' name='email'/>
//             </div>
//             <div className='label m-2'>
//                 <Field className='g' name='gender' as='select'>
//                     <option value="" disabled selected hidden>Choose gender</option>
//                     <option value="men">Men</option>
//                     <option value="women">Women</option>
//                 </Field>
//                 <ErrorMessage className='text2 mt-2' component='span' name='gender'/>
//             </div>
//             <div className='label m-2'>
//             {statusClear.length>0&&!addStatus&&<Field className='s' name='status' as='select' onClick={(e) => {
//                     if (e.target.value==='new status') {setAddStatus(true)}else{setAddStatus(false)}
//                 }}>
//                     <option value="" disabled selected hidden>Choose status</option>
//                     {statusClear.map((status)=>(<option value={status}>{status}</option>))}
//                     <option value="new status">add new status</option>
//                 </Field>}
//                 {addStatus&&<Field id='statInp' name='status' as='input' placeholder='New status'></Field>}
//                 {statusClear.length<1&&<Field id='statInp' name='status' as='input' placeholder='New status'></Field>}
//                 <ErrorMessage className='text2 mt-2' component='span' name='status'/>
//             </div>
//             <div className='label m-2'>
//             <Field placeholder='avatar link' className='a' type='text' name='avatar' id='avatar'/>
//             </div>
//             <ErrorMessage className='text2 mt-2' component='span' name='avatar'/>
//             <div className='check m-2 mb-2'>
//             <label className='me-2' htmlFor='favorite'>Favorite</label>
//             <Field type='checkbox' name='favorite' id='favorite'/>
//             </div>
//             <Button type='submit' color='black' bg='red' text='Update'/>
//             </Form>
//             )}
//         </Formik>
//         </div>
//     )
// }
// export default UpdateContact