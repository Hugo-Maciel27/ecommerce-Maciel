import React from 'react'
import { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount]= useState(initial)

    const sumar = () => {
        if(count < stock){
          setCount(count + 1)
       }
    }

    const  restar = () => {
        if(count > initial){
           setCount(count - 1)
       }
    }

  return (
    <>
    <div>
        <button onClick={restar}>-</button>
        <span>{count}</span>
        <button onClick={sumar}>+</button>
    </div>
        <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount