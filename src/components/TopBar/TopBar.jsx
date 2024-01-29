import './TopBar.scss'
import Button from '../Button/Button'
const ContactList = () => {
    return(
        <>
        <div id="type_buttons_cotact_list">
            <div className='b_and_d'>
            <Button text='all'></Button>
            <span className='digit bg_blue'>4</span>
            </div>
            <div className='b_and_d'>
            <Button text='work'></Button>
            <span className='digit bg_blue'>1</span>
            </div>
            <div className='b_and_d'>
            <Button text='family'></Button>
            <span className='digit bg_blue'>1</span>
            </div>
            <div className='b_and_d'>
            <Button text='friend'></Button>
            <span className='digit bg_blue'>1</span>
            </div>
            <div className='b_and_d'>
            <Button text='privat'></Button>
            <span className='digit bg_blue'>1</span>
            </div>
        </div>
        </>
    )
}
export default ContactList