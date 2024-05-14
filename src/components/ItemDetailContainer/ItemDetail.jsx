import React from 'react'
import ItemCount from '../ItemCount'

export const ItemDetail = ({ product }) => {
  // Verifica si product está definido y no es null ni undefined
  if (!product) return null;

  // Si product está definido, muestra la información del producto
  return (
    <div>
      <div>
        <h1>Producto</h1>
        {product.imagen && <img src={product.imagen} alt="Product" />}
      </div>
      <div>
        <p>{product.nombre}</p>
        <p>Precio: {product.precio}</p>
      </div>
    </div>
  );
};
