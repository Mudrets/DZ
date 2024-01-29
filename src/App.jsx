import './App.scss'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import ContactList from './components/ContactList/ContactList'
import NotFound from './components/NotFound/NotFound'
import NewContact from './components/NewContact/NewContact'
import UpdateContact from './components/UpdateContact/UpdateContact'
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ContactList/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
          <Route path='/new-contact' element={<NewContact/>}></Route>
          <Route path='/update-contact' element={<UpdateContact/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
