import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito, borrarProductoPorId, precioTotal } = useContext(CartContext)

    if(carrito.length === 0){
      return(
        <div className='mensaje'>
          <h1>El carrito está vacío 😢</h1>
          <Link className='ver-productos' to="/">Ver productos</Link>
        </div>
      )

    }

  return (
    <div>
      <h1>Carrito de compras</h1>
        {carrito.map((productoCarrito) => (
       <div key={productoCarrito.id} className='carritoCart'>
         <img className='imgCart' src={productoCarrito.imagen} alt={productoCarrito.nombre} />
         <h3>{productoCarrito.nombre}</h3>
          <div>
             <h3>cantidad: {productoCarrito.quantity}</h3>
             <h3>precio unitario: {productoCarrito.precio}</h3>
             <h3>precio parcial: {productoCarrito.precio * productoCarrito.quantity}</h3>
          </div>
           <button onClick={() => borrarProductoPorId(productoCarrito.id)}>Borrar</button>
       </div>
         ))}

         <h2>Total de su compra: $ {precioTotal() }</h2>
         <Link to="/checkout" class="orange-link">Continuar con mi compra</Link>
         <button onClick={vaciarCarrito} class="vaciar-button">Vaciar carrito</button>
    </div>
  )
}

export default Cart