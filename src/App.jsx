import './App.scss'
import {useState} from 'react' 
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import UpdateContact from './components/UpdateContact/UpdateContact'
import Header from './components/Header/Header'
import ContactList from './components/ContactList/ContactList'
import NotFound from './components/NotFound/NotFound'
import NewContact from './components/NewContact/NewContact'
function App() {
  const [store,setStore]= useState([])
  const [counters,setCounters]=useState(
    {
      all: Object.keys(store).length,
      work: store.filter((el) => el.status==='work').length,
      family: store.filter((el) => el.status==='family').length,
      friend: store.filter((el) => el.status==='friend').length,
      private: store.filter((el) => el.status==='private').length,
    }
  )
  const changeCounters = (status,i) => {
    setCounters((prevCounters) => {
      if (i) {   
        return {
          all: prevCounters.all + 1,
          work: store.filter((el) => el.status==='work').length,
          family: store.filter((el) => el.status==='family').length,
          friend: store.filter((el) => el.status==='friend').length,
          private: store.filter((el) => el.status==='private').length,
          [status]: prevCounters[status] + 1,
        };
      }
      else{
        return {
          all: prevCounters.all - 1,
          work: store.filter((el) => el.status==='work').length,
          family: store.filter((el) => el.status==='family').length,
          friend: store.filter((el) => el.status==='friend').length,
          private: store.filter((el) => el.status==='private').length,
          [status]: prevCounters[status] - 1,
        };
      }
    });
  }
  const handleNewContact = (NewContact) => {
    setStore(prevStore => [...prevStore,NewContact])
    changeCounters(NewContact.status,true)
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
    setStore(prevStore => {
      return prevStore.filter(item => item.id !== id);
    });
    changeCounters(status)
  }
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ContactList counters={counters} deleteContact={deleteContact} changeFav={changeFav} store={store}/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='/update-contact' element={<UpdateContact/>}></Route>
          <Route path='/new-contact' element={<NewContact onNewContact={handleNewContact}/>}></Route>
          <Route path='/update-contact' element={<UpdateContact/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

