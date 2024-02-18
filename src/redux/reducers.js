import {ADD_CONTACT,DELETE_CONTACT,STATUS_FILTER,UPDATE_CONTACT,IS_UPDATING,CHANGE_FAVORITE,SEARCH_CONTACT,ADD_STATUS,DELETE_STATUS,IS_ADDING}from './type'
import {v4 as uuidv4} from 'uuid'
const initialState = {
    contacts:[
        {
            id:uuidv4(),
            name:'brad lorson',
            phone:'0947654756',
            email:'brad.lorson@gmail.com',
            avatar:'https://images.unsplash.com/photo-1519831444882-bd0536407b00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            gender:'men',
            status:'family',
            favorite:false
            },
            {
            id:uuidv4(),
            name:'lari kuder',
            phone:'084573875',
            email:'lari.kuder@gmail.com',
            avatar:'https://images.unsplash.com/photo-1621905253185-95614217f357?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            gender:'men',
            status:'work',
            favorite:false
            },
            {
            id:uuidv4(),
            name:'amanda aniston',
            phone:'0587659874',
            email:'amanda.aniston@gmail.com',
            avatar:'https://images.unsplash.com/photo-1527610276295-f4c1b38decc5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            gender:'women',
            status:'other',
            favorite:false
            },
            {
            id:uuidv4(),
            name:'mari brixon',
            phone:'0346718234',
            email:'mari.brixon@gmail.com',
            avatar:'https://images.unsplash.com/photo-1563620915-8478239e9aab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            gender:'women',
            status:'work',
            favorite:true
            },
            {
            id:uuidv4(),
            name:'darvin labris',
            phone:'095375643',
            email:'darvin.labris@gmail.com',
            avatar:'https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            gender:'men',
            status:'family',
            favorite:true
            },
            {
            id:uuidv4(),
            name:'kara kardin',
            phone:'0764587463',
            email:'kara.kardin@gmail.com',
            avatar:'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            gender:'women',
            status:'work',
            favorite:false
            },
            {
            id:uuidv4(),
            name:'derek arzola',
            phone:'0764587322',
            email:'derek.arzola@gmail.com',
            avatar:'https://images.pexels.com/photos/1585634/pexels-photo-1585634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            gender:'men',
            status:'family',
            favorite:false
            },
            {
            id:uuidv4(),
            name:'marshal baxter',
            phone:'0665829756',
            email:'marshal.baxter@gmail.com',
            avatar:'https://images.unsplash.com/photo-1584598437775-a34887172533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxwSTZzNURPcXJuOHx8ZW58MHx8fHx8',
            gender:'men',
            status:'work',
            favorite:false
            },
    ],
    statusFilter:'all',
    isUpdating:[false,'id'],
    isAdding:false,
    searchTerm:'',
    statusList:['other','work','family']
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
                    if (contact.id === action.payload.id) {
                      return action.payload.contact
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
        case IS_ADDING:
            return{
                ...state,
                isAdding:action.payload
            }
        case SEARCH_CONTACT:
            return{
                ...state,
                searchTerm: action.payload
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
        case DELETE_STATUS:
            return{
                ...state,
                contacts: state.contacts.map(contact => {
                    if (contact.status === action.payload) {
                      return {...contact, status: 'other'}
                    } 
                    return contact
                  }),
                statusList:state.statusList.filter(status => status !== action.payload)
            }
        case ADD_STATUS:
            if (!state.statusList.includes(action.payload)&&action.payload!=='') {         
                return{
                    ...state,
                    statusList:[...state.statusList, action.payload]
                }
            }
        default:
            return state
    }
}
export default reducers