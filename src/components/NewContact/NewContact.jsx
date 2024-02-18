import { validationSchema } from '../../assets/validation/validation'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { addContact,addStatus,isAdding,isUpdating } from '../../redux/action'
const NewContact = () => {
    const [isFav,setIsFav] = useState(false)
    const statusList = useSelector(state => state.statusList)
    const dispatch = useDispatch()
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
        dispatch(isUpdating(false,'id'))
        dispatch(addStatus(values.status))
        dispatch(addContact(values))
        dispatch(isAdding(false))
    }
    const back =()=>{
        dispatch(isUpdating(false,'id'))
        dispatch(isAdding(false))
    }
    return(
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
                <Form className={`ContactItem update`}>
                <span className='upsp'>Please enter contact info</span>
                <ErrorMessage className='error e1' component='span' name='phone' />
                <ErrorMessage className='error e2' component='span' name='status'/>
                <ErrorMessage className='error e3' component='span' name='email'/>
                <ErrorMessage className='error e4' component='span' name='gender'/>
                <ErrorMessage className='error e5' component='span' name='name'/>
                <ErrorMessage className='error e6' component='span' name='avatar'/>
                <Field  type='text' className='name' placeholder='name'  id='name' name='name'/>
                <Field  type='text' id='avatar'  placeholder='avatar link' name='avatar' className='avatar'/>
                <Field  className='status' name='status' as='select' onClick={(e) => {
                }}>
                    <option value="" disabled selected hidden>Choose status</option>
                    {statusList.map((status)=>(<option key={status} value={status}>{status}</option>))}
                </Field>
                <div className='info'>
                    <Field type='number'  placeholder='phone'  className='phone' id='phone' name='phone'/>
                    <Field type='text' className='email' placeholder='email' id='email' name='email'></Field>
                    <Field className='gender'  name='gender' as='select'>
                        <option value="" disabled selected hidden>Choose gender</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                    </Field>
                </div>
                <div className='btns'>
                    <button type='submit' className='b'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    </button>
                    <div  className='b' onClick={()=>back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/> <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/> </svg>
                    </div>
                <label className='b'>
                        <Field type='checkbox' name='favorite' className='d-none' onClick={() => setIsFav(!isFav)}/>
                        {!isFav&&<svg className='star' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor"  viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/> </svg>}
                        {isFav&&<svg className='star favorite' xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/> </svg>}
                </label>
                </div>
                </Form>
            </Formik>
    )
}
export default NewContact