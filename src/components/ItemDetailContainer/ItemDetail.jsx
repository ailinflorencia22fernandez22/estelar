import React from 'react'

export const ItemDetail = ({ product }) => {
  return (
    <div>
        <h1>Producto</h1>
        <img src={product.imagen} />
        <p>{product.nombre}</p>
        <p>Precio:{product.precio}</p>
    </div>
  )
}
