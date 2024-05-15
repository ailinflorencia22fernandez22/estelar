import React from 'react'


const ItemDetail = ({ product }) => {
  
  
   return (
      
    <div>
         <img src={product.imagen} />
      <div>
         <p>{product.nombre}</p>
         <p>Precio:{product.precio}</p>
         <p>Los ingredientes más comunes son finas fetas de jamón cocido y queso de máquina3​ de consistencia semidura, más bien blando y semigraso. Otras variaciones utilizan salame, pastrón o pastrami u otros fiambres. En cambio en Uruguay suele utilizarse un queso que se denomina simplemente queso de sandwich o queso sandwich, son comunes los sándwiches de jamón y choclo, los de lomito canadiense, los de bondiola, los de pollo o los de atún.

         Los triples suelen estar constituidos por una capa de fiambre (usualmente jamón) o queso y otra de hojas de lechuga o finas rodajas de tomate.

         Algunos tradicionales en Argentina son por ejemplo: jamón cocido y queso; jamón cocido y tomate; jamón crudo y queso; queso y aceitunas. Otras variedades incluyen: palmitos, atún, aceitunas, salame, ananá, etc. Si se siguen las reglas de preparación la lista de combinaciones es larga. En Uruguay es muy común el llamado "sándwich olímpico" que, además de jamón, lleva tomate, lechuga, huevo duro y salsa mayonesa (si se desea, se le pueden agregar aceitunas).</p>
      </div>
    </div>
   );
};

export default ItemDetail;