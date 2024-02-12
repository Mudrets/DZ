import './TopBar.scss'
import Button from '../Button/Button'
const ContactList = ({store,filter,active}) => {
    const statusClear=[...new Set(store.map((el) => el.status.toLowerCase()))];
    function countOccurrences(arr) {
        const countMap = {};
      
        arr.forEach(element => {
          if (countMap[element]) {
            countMap[element]++;
          } else {
            countMap[element] = 1;
          }
        });
      
        return countMap;
      }
    return(
        <>
        <div id="type_buttons_cotact_list">
            <div className='b_and_d'  key={'all'}>
            {active==='all' &&<Button color='black' func={()=>filter('all')} bg='yellow' text={'all'}></Button>}
            {active!=='all' &&<Button color='gray' func={()=>filter('all')} bg='bg' text={'all'}></Button>}
            <span className='digit bg_red'>{store.length}</span>
            </div>
            {statusClear.map((status)=>(
            <div className='b_and_d' key={status}>
            {active===status &&<Button color='black' func={()=>filter(status)} bg='yellow' text={status}></Button>}
            {active!==status &&<Button color='gray' func={()=>filter(status)} bg='bg' text={status}></Button>}
            <span className='digit bg_red'>{countOccurrences(store.map((el) => el.status.toLowerCase()))[status.toLowerCase()]}</span>
            </div>
            ))}
        </div>
        </>
    )
}
export default ContactList