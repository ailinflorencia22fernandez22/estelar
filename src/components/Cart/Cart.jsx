import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CartContext)

  return (
    <div>
      <h1>Carrito de compras</h1>
       {
        carrito.map( (productoCarrito)=> (
            <div className='carritoCart'>
                <img className='imgCart' src={productoCarrito.imagen}  />
                <h3>{productoCarrito.nombre}</h3>
                <h3> cantidad: { productoCarrito.quantity }</h3>
                <h3> precio unitario:{ productoCarrito.precio }</h3>
                <h3> precio parcial:{  }</h3>

            </div>
        ) )
       }
       <button onClick={vaciarCarrito}>vaciar carrito</button>
    </div>
  )
}

export default Cart