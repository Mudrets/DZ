import * as Yup from 'yup'
const digitsOnly = (value) => /^[\d+]+$/.test(value)
export const validationSchema = Yup.object().shape({
    name: Yup.string().min(2).max(20).matches(/^[^\d]*$/,'Name must consist only of letters').required('Name is required'),
    phone: Yup.string().min(8).max(12).required('Phone is required').test('Digits only', 'Number should have digits only', digitsOnly),
    email: Yup.string().email('Invalid email').required('Email is required'),
    avatar: Yup.string().required('Avatar is required'),
    gender: Yup.string().oneOf(['men', 'women'], 'Invalid gender').required('Gender is required'),
    status: Yup.string().required('Status is required').max(10),
    favorite: Yup.boolean()
  })