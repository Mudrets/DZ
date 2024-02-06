import './TopBar.scss'
import Button from '../Button/Button'
const ContactList = (props) => {
    return(
        <>
        <div id="type_buttons_cotact_list">
            <div className='b_and_d'>
            <Button color='gray' bg='white' text='all'></Button>
            <span className='digit bg_blue'>{props.counters.all}</span>
            </div>
            <div className='b_and_d'>
            <Button color='gray' bg='white' text='work'></Button>
            <span className='digit bg_blue'>{props.counters.work}</span>
            </div>
            <div className='b_and_d'>
            <Button color='gray' bg='white' text='family'></Button>
            <span className='digit bg_blue'>{props.counters.family}</span>
            </div>
            <div className='b_and_d'>
            <Button color='gray' bg='white' text='friend'></Button>
            <span className='digit bg_blue'>{props.counters.friend}</span>
            </div>
            <div className='b_and_d'>
            <Button color='gray' bg='white' text='private'></Button>
            <span className='digit bg_blue'>{props.counters.private}</span>
            </div>
        </div>
        </>
    )
}
export default ContactList