import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import "./ItemListContainer.css"


const ItemList = ({ products }) => {
  return (
    <div className='itemProduct'>
      {products.map((product) => (
        <Link to={"/detail/" + product.id} key={product.id} className='idproduct'>
          <div>
            <img src={product.imagen} alt={product.nombre} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
