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
    phone:'0000000000',
    email:'test1@gmail.com',
    avatar:'11',
    gender:'men',
    status:'family',
    favorite:false
    },
    {
    id:'test2',
    name:'test',
    phone:'1111111111',
    email:'test2@gmail.com',
    avatar:'22',
    gender:'women',
    status:'work',
    favorite:false
    }
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
          <Route path='/update-contact/:id' element={<UpdateContact contact={updateContact} changeContact={handleEditContact}/>}></Route>
          <Route path='/new-contact' element={<NewContact onNewContact={handleNewContact}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

