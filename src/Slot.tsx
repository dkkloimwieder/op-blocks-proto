import {children as ch, createMemo, createEffect, splitProps } from "solid-js"



const Slot = (props) => {
    const [local,rest] = splitProps(props, ['children'])
    const c=ch(()=>props.children)

     createEffect (()=>{
            c().forEach(e=>{
               
                e.style.color = rest.color
                console.log("slot2", e.style.color)
                
            
            })})

    return (
   <>
    <div>
        Hello
        </div>
    {c()}
     
   </>
    )

}

export default Slot
