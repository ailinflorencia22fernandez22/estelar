import { useState } from "react";
import React from 'react'
import './ItemCount.css';



const ItemCount = ({ stock, addProduct}) => {
    
    const [count, setCount] = useState(1)

    const handleClickDecrement = () => {
        if(count > 1){
          setCount(count - 1)

        }
    }
    const handleClickIncrement = () => {
        if(count < stock){
           setCount(count +1)
        }
       

    }
    const handleClickAddToCart = () => {
      if (count){
        addProduct(count)
      }
      
       

    }
  return (
    <div>
     <div className="contenedor-botones">
      <button className="boton" onClick={handleClickDecrement}>-</button>
      <p>{count}</p>
      <button className="boton" onClick={handleClickIncrement}>+</button>
      <br /> {/* Agrega un salto de línea */}
      <button className="boton-agregar" onClick={handleClickAddToCart}>Agregar al carrito</button>
    </div>
  </div>
  )
}

export default ItemCount