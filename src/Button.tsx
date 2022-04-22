import { createSignal } from 'solid-js'

import Slot from './Slot'


const Display = (props) => {
    if (props.color) {
        return (
            <div className="display" style={{ color: props.color }}>
                {props.children}
            </div>
        )
    } else {
        return (
            <div className="display">
                {props.children}
            </div>
        )
    }
}
const Button = () => {
    return(
        <>
        <Slot color='red' slottable class="helo">
            <Display stlye={{color:'blue'}}>Hello</Display>
            <Display>World</Display>
           
        </Slot>
        </>
    )
}

export default Button