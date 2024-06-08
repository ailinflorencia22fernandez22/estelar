import  CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import "./NavBar.css";
import { Link } from "react-router-dom";



const NavBar = () => {
    return(
        <nav className="navBar">
            
           <div className="container-menu">
                <Link to="/" className="logo">
                   <img src="https://i.pinimg.com/564x/b9/74/03/b97403c7331af47731f1d62379783787.jpg" alt="Logo" />
                </Link>
                <ul className="menu-list">
                   <Link to="/category/productos"className="categoria">Productos</Link>
                   <Link to="/category/especiales"className="categoria">Especiales</Link>
                   <Link to="/category/contacto"className="categoria">Contacto</Link>
                </ul>
               <CartWidget/>
          </div>
         </nav>
    )
        
}
export default NavBar