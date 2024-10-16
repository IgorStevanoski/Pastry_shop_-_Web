import './Button.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Button({name, clickFunction, wid = "200px"}){

    let buttonClass = "button"

    if (name.length <= 1){
        buttonClass = "button-small"
    }

    return(
        <button style={{width: wid}}onClick={clickFunction} className={'btn btn-outline-primary ' + buttonClass}>{name}</button>
    )
}