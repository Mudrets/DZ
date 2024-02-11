import './Header.scss'
import {Link} from "react-router-dom"
import Input from '../Input/Input'

const Header = () => {
    return(
        <div className='bg_white head'>
        <div id='header' className="container">
            <div className="center">
                <Link id='nav_contact_list' className='c_gray me-3 text3' to='/'>
                    Contact List
                </Link>
                <Link id='nav_add_new' className='c_gray text2' to='/new-contact'>
                    Add new <svg xmlns="http://www.w3.org/2000/svg" className='c_gray' width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
                </Link>
            </div>
            <Input placeholder='Search' bg='white' color='gray'/>
        </div>
        </div>
    )
}
export default Header