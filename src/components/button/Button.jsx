import './button.css'

const Button = ({label, onClick}) => 
    <button onClick={onClick} type="button">{label}</button>
    

export default Button