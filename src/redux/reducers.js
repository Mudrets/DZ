import {ADD_CONTACT,DELETE_CONTACT,STATUS_FILTER,UPDATE_CONTACT,IS_UPDATING,CHANGE_FAVORITE}from './type'

const initialState = {
    contacts:[
        {
            id:'test1',
            name:'firstName lastName',
            phone:'1111111111',
            email:'test1@gmail.com',
            avatar:'https://images.unsplash.com/photo-1519831444882-bd0536407b00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            gender:'men',
            status:'family',
            favorite:false
            },
            {
            id:'test2',
            name:'firstName lastName',
            phone:'2222222222',
            email:'test2@gmail.com',
            avatar:'https://images.unsplash.com/photo-1621905253185-95614217f357?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            gender:'women',
            status:'work',
            favorite:false
            },
            {
            id:'test3',
            name:'firstName lastName',
            phone:'3333333333',
            email:'test3@gmail.com',
            avatar:'https://images.unsplash.com/photo-1527610276295-f4c1b38decc5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            gender:'men',
            status:'new status',
            favorite:false
            },
            {
            id:'test4',
            name:'firstName lastName',
            phone:'4444444444',
            email:'test4@gmail.com',
            avatar:'https://images.unsplash.com/photo-1563620915-8478239e9aab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            gender:'women',
            status:'work',
            favorite:false
            },
            {
            id:'test5',
            name:'firstName lastName',
            phone:'5555555555',
            email:'test5@gmail.com',
            avatar:'https://plus.unsplash.com/premium_photo-1679971488735-6e4d613c682f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            gender:'men',
            status:'family',
            favorite:false
            },
            {
            id:'test6',
            name:'firstName lastName',
            phone:'6666666666',
            email:'test6@gmail.com',
            avatar:'https://plus.unsplash.com/premium_photo-1680790392289-e8ccd9a0bf5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            gender:'women',
            status:'work',
            favorite:false
            },
            {
            id:'test7',
            name:'firstName lastName',
            phone:'7777777777',
            email:'test7@gmail.com',
            avatar:'https://plus.unsplash.com/premium_photo-1694618625457-14fec8cb76a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxHUWdaZzJDdGZuVXx8ZW58MHx8fHx8',
            gender:'women',
            status:'family',
            favorite:false
            },
            {
            id:'test8',
            name:'firstName lastName',
            phone:'8888888888',
            email:'test8@gmail.com',
            avatar:'https://images.unsplash.com/photo-1584598437775-a34887172533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxwSTZzNURPcXJuOHx8ZW58MHx8fHx8',
            gender:'men',
            status:'work',
            favorite:false
            },
    ],
    statusFilter:'all',
    isUpdating:[false,'id']
}
const reducers =(state = initialState, action) => {
    switch (action.type){
        case ADD_CONTACT:
            return{
                ...state,
                contacts:[...state.contacts, action.payload]
            }
        case DELETE_CONTACT:
            return{
                ...state,
                contacts:state.contacts.filter(contact => contact.id !== action.payload)
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact => {
                    if (contact.id === action.payload[0]) {
                      return action.payload[1]
                    } 
                    return contact
                  })
            }
        case STATUS_FILTER:
            return{
                ...state,
                statusFilter:action.payload
            }
        case IS_UPDATING:
            return{
                ...state,
                isUpdating:action.payload
            }
        case CHANGE_FAVORITE:
            return{
                ...state,
                contacts: state.contacts.map(contact => {
                    if (contact.id === action.payload) {
                      return {...contact, favorite: !contact.favorite}
                    } 
                    return contact
                  })
            }
        default:
            return state
    }
}
export default reducers