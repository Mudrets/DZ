import './Select.scss'
const Input = (props) => {
    return(
        <select className={`select_special c_${props.color} bg_${props.bg}`}>
            {props.options.map((el)=>(<option value={el}>{el}</option>))}
        </select>
    )
}
export default Input