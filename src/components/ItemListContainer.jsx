import { useEffect, useState } from "react";
import "./NavBar.css";
import getProducts from "../data/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";


const ItemListContainer = (props) => {
   const [products, setProducts ] = useState([]);
   const { idCategory } = useParams()
    
   useEffect(()=>{

    getProducts()
      .then((respuesta) => {
         if(idCategory){
          const productsFilter = respuesta.filter((productRes)=> productRes.category === idCategory)
          setProducts(productsFilter)
         }else{
           setProducts(respuesta);
         }
    })
    .catch((error) => {
       console.error(error);
    })
    .finally(() => {
       console.log("finalizo la promesa");
    });

   },[idCategory]);

 
  return (
     <>
    
    <div className="props">
     <p>{props.saludo}</p>
     </div>
          <ItemList products ={products}/>
      
       </>
    
  )
}

export default ItemListContainer