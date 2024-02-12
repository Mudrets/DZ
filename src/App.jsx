import './App.scss'
import {useState} from 'react' 
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import UpdateContact from './components/UpdateContact/UpdateContact'
import Header from './components/Header/Header'
import ContactList from './components/ContactList/ContactList'
import NotFound from './components/NotFound/NotFound'
import NewContact from './components/NewContact/NewContact'
function App() {
  const [store,setStore]= useState([
    {
    id:'test1',
    name:'test',
    phone:'1111111111',
    email:'test1@gmail.com',
    avatar:'11',
    gender:'men',
    status:'family',
    favorite:false
    },
    {
    id:'test2',
    name:'test',
    phone:'2222222222',
    email:'test2@gmail.com',
    avatar:'22',
    gender:'women',
    status:'work',
    favorite:false
    },
    {
    id:'test3',
    name:'test',
    phone:'3333333333',
    email:'test3@gmail.com',
    avatar:'33',
    gender:'men',
    status:'new status',
    favorite:false
    },
    {
    id:'test4',
    name:'test',
    phone:'4444444444',
    email:'test4@gmail.com',
    avatar:'44',
    gender:'women',
    status:'work',
    favorite:false
    },
    {
    id:'test5',
    name:'test',
    phone:'5555555555',
    email:'test5@gmail.com',
    avatar:'55',
    gender:'men',
    status:'family',
    favorite:false
    },
    {
    id:'test6',
    name:'test',
    phone:'6666666666',
    email:'test6@gmail.com',
    avatar:'66',
    gender:'women',
    status:'work',
    favorite:false
    },
    {
    id:'test7',
    name:'test',
    phone:'7777777777',
    email:'test7@gmail.com',
    avatar:'77',
    gender:'men',
    status:'family',
    favorite:false
    },
    {
    id:'test8',
    name:'test',
    phone:'8888888888',
    email:'test8@gmail.com',
    avatar:'88',
    gender:'women',
    status:'work',
    favorite:false
    },
])
  const handleNewContact = (NewContact) => {
    setStore(prevStore => [...prevStore,NewContact])
  }
  const changeFav = (id) => {
    setStore(prevStore => {
      return prevStore.map(item => {
        if (item.id === id) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      });
    });
  }
  const deleteContact = (id,status) => {
    setStore(prevStore => prevStore.filter(item => item.id !== id));
  }
  const [updateContact,setupdateContact]=useState(
    {
        id:'',
        name:'',
        phone:'',
        email:'',
        avatar:'',
        gender:'',
        status:'',
        favorite:false
    }
  )
  const handleupdateContact = (contact) => {
    console.log(contact.id);
    setupdateContact(prevStore => contact)
  }
  const handleEditContact = (id, newContact) => {
    setStore(prevStore => {
      return prevStore.map(item => {
        if (item.id === id) {
          return newContact ;
        }
        return item;
      });
    });
    console.log(store);
  };
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ContactList changeContact={handleupdateContact} deleteContact={deleteContact} changeFav={changeFav} store={store}/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='/update-contact/:id' element={<UpdateContact store={store} contact={updateContact} changeContact={handleEditContact}/>}></Route>
          <Route path='/new-contact' element={<NewContact store={store} onNewContact={handleNewContact}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

