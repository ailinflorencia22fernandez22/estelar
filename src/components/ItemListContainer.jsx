import { useEffect, useState } from "react";
import "./NavBar.css";
import getProducts from "../data/data";

const ItemListContainer = (props) => {
   const [products, setProducts ] = useState([]);
    
   useEffect(()=>{

    getProducts()
      .then((respuesta) => {
        setProducts(respuesta);
    })
    .catch((error) => {
       console.error(error);
    })
    .finally(() => {
       console.log("finalizo la promesa");
    });

   },[]);

 
  return (
    <>
    
    <div className="props">
     <p>{props.saludo}</p>
      {
        products.map((product) =>(
          <div key={product.id}>
            <img src={product.imagen} />
            <p>{product.nombre}</p>
          </div>
        ))
      }

      </div>
     </>
    
  )
}

export default ItemListContainer