import './Input.scss'
const Input = (props) => {
    return(
        <input className={`input_special white bg_${props.bg} c_${props.color}`} type="text" placeholder={props.placeholder}/>
    )
}
export default Input