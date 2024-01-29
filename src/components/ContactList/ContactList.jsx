import './ContactList.scss'
import Button from '../Button/Button'
import TopBar from '../TopBar/TopBar'
import ContactItem from '../ContactItem/ContactItem'
const ContactList = () => {
    return(
        <div className='container p-0'>
        <TopBar></TopBar>
        <div id='contacts'>
        <ContactItem tag='Work' name='Name Name' number='+38 000 000 0000' email='mail@mail.com'></ContactItem>
        <ContactItem tag='Work' name='Name Name' number='+38 000 000 0000' email='mail@mail.com'></ContactItem>
        <ContactItem tag='Work' name='Name Name' number='+38 000 000 0000' email='mail@mail.com'></ContactItem>
        <ContactItem tag='Work' name='Name Name' number='+38 000 000 0000' email='mail@mail.com'></ContactItem>
        </div>
        </div>
    )
}
export default ContactList