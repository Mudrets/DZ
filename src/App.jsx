import './App.scss'
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import ContactList from './components/ContactList/ContactList'
import NotFound from './components/NotFound/NotFound'
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
          {/* <Route path='/update-contact/:id'element={<ContactList/>}></Route> */}
          {/* <Route path='/update-contact/:id'element={<UpdateContact/>}></Route> */}
          {/* <Route path='/new-contact' element={<ContactList/>}></Route> */}
        </Routes>
      </Router>
    </Provider>
  )
}

export default App