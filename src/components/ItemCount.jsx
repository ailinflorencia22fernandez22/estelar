import { useState } from "react";
import React from 'react'
import './ItemCount.css';



const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1)

    const restar = () => {
        if(count > 1){
          setCount(count - 1)

        }
    }
    const sumar = () => {
        if(count < stock){
           setCount(count +1)
        }
       

    }
    const agregarAlCarrito = () => {
        console.log(count)

    }
  return (
    <div>
     <div className="contenedor-botones">
      <button className="boton" onClick={restar}>-</button>
      <p>{count}</p>
      <button className="boton" onClick={sumar}>+</button>
      <br /> {/* Agrega un salto de línea */}
      <button className="boton-agregar" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  </div>
  )
}

export default ItemCount