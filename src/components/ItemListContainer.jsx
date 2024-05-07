import { useEffect, useState } from "react";
import "./NavBar.css";
import getProducts from "../data/data";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

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
     </div>
          <ItemList products ={products}/>
            <div className="FondoImg">
              <img src="https://st2.depositphotos.com/4393299/7057/v/950/depositphotos_70570845-stock-illustration-doodle-sandwich-seamless-pattern-background.jpg" />
             </div>
      
     
       </>
    
  )
}

export default ItemListContainer