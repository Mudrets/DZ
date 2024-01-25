import './Left_bar.css';
import phone from './add-contact.png'
import email from './email.png'

function Bar(props) {
  
  return (
    <div id='left_bar'>
      <div id='avatar'></div>
      <span className='topName'>Contacts</span>
      <span><img src={phone} alt=''/>{props.number}</span>
      <span><img src={email} alt=''/>{props.email}</span>
      <span className='topName'>Tech Scills</span>
      <ul>{props.ts.map((el)=><li key={el}>{el}</li>)}</ul>
      <span className='topName'>Soft Scills</span>
      <ul>{props.ss.map((el)=><li key={el}>{el}</li>)}</ul>
    </div>
  );
}

export default Bar;
