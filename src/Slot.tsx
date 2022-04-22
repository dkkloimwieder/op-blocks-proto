import {children as ch, createMemo, createEffect, splitProps } from "solid-js"



const Slot = (props) => {
    const c=ch(()=>props.children)
    const [_,rest] = splitProps(props, ['children'])
    const [count, setCount] = createSignal(0)

     createEffect (()=>{
            c().forEach(e=>{
                Object.keys({...rest}).forEach(k=>{
                    console.log(k, rest[k])
                    e.props[k]=rest[k]
                })
                e.style.color = rest.color

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


