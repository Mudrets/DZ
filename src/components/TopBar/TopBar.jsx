import './TopBar.scss'
import Button from '../Button/Button'
const ContactList = ({store,filter,active}) => {
    const statusClear=[...new Set(store.map((el) => el.status))]
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
            <div className='b_and_d'  key={'all'} onClick={()=>filter('all')}>
            {active==='all' &&<Button color='gray' bg='white' text={'all'}></Button>}
            {active!=='all' &&<Button color='white' bg='bg' text={'all'}></Button>}
            <span className='digit bg_blue'>{store.length}</span>
            </div>
            {statusClear.map((status)=>(
            <div className='b_and_d' key={status} onClick={()=>filter(status)}>
            {active!==status &&<Button color='white' bg='bg' text={status}></Button>}
            {active===status &&<Button color='gray' bg='white' text={status}></Button>}
            <span className='digit bg_blue'>{countOccurrences(store.map((el) => el.status))[status]}</span>
            </div>
            ))}
        </div>
        </>
    )
}
export default ContactList