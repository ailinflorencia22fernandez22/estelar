import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"


const ItemList = ({products}) => {
  return (
    <div className='itemProduct'>
        {
        products.map((product) =>(
            <div className='idproduct' key={product.id}>
            <img src={product.imagen} />
            <p>{product.nombre}</p>
            <p>Precio:{product.precio}</p>
            <Link to={"/detail/" + product.id}><p>Ver detalles</p></Link>
          </div>
        ))
      }

    </div>
  )
}

export default ItemList