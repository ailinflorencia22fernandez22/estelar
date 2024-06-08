import { useState } from "react";
import Formulario from "./Formulario";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc,setDoc, Timestamp } from "firebase/firestore";
import db from "../../db/db.js";
import validateFrom from "../../utils/ValidationYuo.js";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Checkout.css"

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
      nombre: "",
      telefono: "",
      email: "",
    });

    const [idOrden, setIdOrden] = useState(null)
    const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext)
   
     const handleChangeImput = (event) => {
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value })
    };

    const handleSubmitForm = async(event) => {
       event.preventDefault();

       const orden = {
         comprador: { ...datosForm },
         productos: [ ...carrito ],
         fecha: Timestamp.fromDate(new Date()),
         total: precioTotal()
       };

       try {
        const response = await validateFrom(datosForm)
       if(response.status === "success"){
        generateOrder(orden)
       }else{
        toast.warning(response.message)
       }
       
       } catch (error) {
        console.log(error)
       }
       
    };

    const generateOrder = (orden) => {
       const ordenesRef = collection(db, "orders")
       addDoc(ordenesRef, orden)
       .then((respuesta)=> setIdOrden(respuesta.id))
       .catch((error) => console.log(error))
       .finally(() => {

        updateStock()

        vaciarCarrito()
       })
    };

    const updateStock = () => {
       carrito.map((productoCarrito) => {
         let quantity = productoCarrito.quantity

         delete productoCarrito.quantity

         const productoRef = doc(db, "products", productoCarrito.id)
         setDoc(productoRef, { ...productoCarrito, stock: productoCarrito.stock - quantity })
         .then(()=> console.log("stock actualizado correctamente"))
         .catch((error)=> console.log(error))
       })
    }

  return (
    <div>
      {
        idOrden ? (
          <div class="centered-content" >
            <h2>Orden generada con extito!🤩 </h2>
            <p id="idOrden" class="hidden">{idOrden}</p>
          </div>
        ) : (
          <Formulario datosForm={datosForm} 
           handleChangeImput={handleChangeImput} 
           handleSubmitForm={handleSubmitForm} 
          />
        )
      }
        
    </div>
  );
};

export default Checkout;