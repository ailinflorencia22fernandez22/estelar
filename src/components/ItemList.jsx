import React from 'react'
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
            <p>Variedad:{product.descripcion}</p>
          </div>
        ))
      }

    </div>
  )
}

export default ItemList