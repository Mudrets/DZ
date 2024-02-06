import './Button.scss'
const Input = (props) => {
    return(
        <button className={`button_special c_${props.color} bg_${props.bg}`} type={props.type}>{props.text}</button>
    )
}
export default Input