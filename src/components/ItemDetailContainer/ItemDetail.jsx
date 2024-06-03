import React from 'react'
import ItemCount from '../ItemCount';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {

      const { agregarProducto } = useContext(CartContext)

     const addProduct = (count) => {
      const productCart = { ...product, quantity: count }
      agregarProducto(productCart)
      console.log(productCart)

  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-image">
        <img src={product.imagen} alt="Product" />
      </div>
      <div className="item-detail-content">
        <h2>{product.nombre}</h2>
        <p>Precio: ${product.precio}</p>
        <ItemCount stock={product.stock}  addProduct={addProduct} />
        <p className='item-detail-description'>{product.descripcion}</p>
          
      </div>
    </div>
  );
};

export default ItemDetail;