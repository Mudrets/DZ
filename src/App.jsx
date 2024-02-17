import './App.scss'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
// import UpdateContact from './components/UpdateContact/UpdateContact'
import Header from './components/Header/Header'
import ContactList from './components/ContactList/ContactList'
import NotFound from './components/NotFound/NotFound'
import NewContact from './components/NewContact/NewContact'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='/'element={<ContactList/>}></Route>
          <Route path='/update-contact/:id'element={<ContactList/>}></Route>
          {/* <Route path='/update-contact/:id'element={<UpdateContact/>}></Route> */}
          <Route path='/new-contact' element={<NewContact/>}></Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App



// import './App.scss'
// import {useState} from 'react' 
// import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
// import UpdateContact from './components/UpdateContact/UpdateContact'
// import Header from './components/Header/Header'
// import ContactList from './components/ContactList/ContactList'
// import NotFound from './components/NotFound/NotFound'
// import NewContact from './components/NewContact/NewContact'
// import TopBar from './components/TopBar/TopBar'
// function App() {
//   const [store,setStore]= useState([
//     {
//     id:'test1',
//     name:'firstName lastName',
//     phone:'1111111111',
//     email:'test1@gmail.com',
//     avatar:'https://images.unsplash.com/photo-1519831444882-bd0536407b00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     gender:'men',
//     status:'family',
//     favorite:false
//     },
//     {
//     id:'test2',
//     name:'firstName lastName',
//     phone:'2222222222',
//     email:'test2@gmail.com',
//     avatar:'https://images.unsplash.com/photo-1621905253185-95614217f357?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     gender:'women',
//     status:'work',
//     favorite:false
//     },
//     {
//     id:'test3',
//     name:'firstName lastName',
//     phone:'3333333333',
//     email:'test3@gmail.com',
//     avatar:'https://images.unsplash.com/photo-1527610276295-f4c1b38decc5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     gender:'men',
//     status:'new status',
//     favorite:false
//     },
//     {
//     id:'test4',
//     name:'firstName lastName',
//     phone:'4444444444',
//     email:'test4@gmail.com',
//     avatar:'https://images.unsplash.com/photo-1563620915-8478239e9aab?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     gender:'women',
//     status:'work',
//     favorite:false
//     },
//     {
//     id:'test5',
//     name:'firstName lastName',
//     phone:'5555555555',
//     email:'test5@gmail.com',
//     avatar:'https://plus.unsplash.com/premium_photo-1679971488735-6e4d613c682f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     gender:'men',
//     status:'family',
//     favorite:false
//     },
//     {
//     id:'test6',
//     name:'firstName lastName',
//     phone:'6666666666',
//     email:'test6@gmail.com',
//     avatar:'https://plus.unsplash.com/premium_photo-1680790392289-e8ccd9a0bf5e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     gender:'women',
//     status:'work',
//     favorite:false
//     },
//     {
//     id:'test7',
//     name:'firstName lastName',
//     phone:'7777777777',
//     email:'test7@gmail.com',
//     avatar:'https://plus.unsplash.com/premium_photo-1694618625457-14fec8cb76a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxHUWdaZzJDdGZuVXx8ZW58MHx8fHx8',
//     gender:'women',
//     status:'family',
//     favorite:false
//     },
//     {
//     id:'test8',
//     name:'firstName lastName',
//     phone:'8888888888',
//     email:'test8@gmail.com',
//     avatar:'https://images.unsplash.com/photo-1584598437775-a34887172533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxwSTZzNURPcXJuOHx8ZW58MHx8fHx8',
//     gender:'men',
//     status:'work',
//     favorite:false
//     },
// ])
//   const handleNewContact = (NewContact) => {
//     setStore(prevStore => [...prevStore,NewContact])
//   }
//   const changeFav = (id) => {
//     setStore(prevStore => {
//       return prevStore.map(item => {
//         if (item.id === id) {
//           return { ...item, favorite: !item.favorite };
//         }
//         return item;
//       });
//     });
//   }
//   const deleteContact = (id,status) => {
//     setStore(prevStore => prevStore.filter(item => item.id !== id));
//   }
//   const [isUpdating,setIsUpdating]=useState([false,'id'])
//   const handleIsUpdating = (bool,id) => {
//     setIsUpdating([bool,id])
//   }
//   const handleupdateContact = (contact) => {
//     setIsUpdating([true,contact.id])
//   }
//   const handleEditContact = (id, newContact) => {
//     setStore(prevStore => {
//       return prevStore.map(item => {
//         if (item.id === id) {
//           return newContact ;
//         }
//         return item;
//       });
//     });
//     console.log(store);
//   };
//   const [statusFilter,setFilterStatus]= useState('all')
//     function filterStatus(keepStatus){
//         setFilterStatus(prevStat=>keepStatus)
//     }
//   return (
//     <>
//       <Router>
//         <Header/>
//         <ContactList statusFilter={statusFilter} isUpdating={isUpdating} changeContact={handleupdateContact} deleteContact={deleteContact} changeFav={changeFav} store={store}/>
//         <Routes>
//           {/* <Route path='*' element={<NotFound/>}></Route> */}
//           <Route path='/' element={<TopBar filter={filterStatus} active={statusFilter} store={store}></TopBar>}></Route>
//           <Route path='/update-contact/:id'element={<UpdateContact store={store} isUpdating={isUpdating}  isUpdatingFunc={handleIsUpdating} changeContact={handleEditContact}/>}></Route>
//           <Route path='/new-contact' element={<NewContact store={store} onNewContact={handleNewContact}/>}></Route>
//         </Routes>
//       </Router>
//     </>
//   )
// }

// export default App

