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
        <p className="item-detail-description">
          Los ingredientes más comunes son finas fetas de jamón cocido y queso de máquina3​ de consistencia semidura, más bien blando y semigraso. Otras variaciones utilizan salame, pastrón o pastrami u otros fiambres. En cambio en Uruguay suele utilizarse un queso que se denomina simplemente queso de sandwich o queso sandwich, son comunes los sándwiches de jamón y choclo, los de lomito canadiense, los de bondiola, los de pollo o los de atún.

          Los triples suelen estar constituidos por una capa de fiambre (usualmente jamón) o queso y otra de hojas de lechuga o finas rodajas de tomate.

          Algunos tradicionales en Argentina son por ejemplo: jamón cocido y queso; jamón cocido y tomate; jamón crudo y queso; queso y aceitunas. Otras variedades incluyen: palmitos, atún, aceitunas, salame, ananá, etc. Si se siguen las reglas de preparación la lista de combinaciones es larga. En Uruguay es muy común el llamado "sándwich olímpico" que, además de jamón, lleva tomate, lechuga, huevo duro y salsa mayonesa (si se desea, se le pueden agregar aceitunas).
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;