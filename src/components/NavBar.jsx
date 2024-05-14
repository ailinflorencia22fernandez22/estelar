import  CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import "./NavBar.css";
import { Link } from "react-router-dom";



const NavBar = () => {
    return(
    <div className="container-menu">
         <div className="logo">
            <img src="https://i.pinimg.com/564x/b9/74/03/b97403c7331af47731f1d62379783787.jpg" alt="Logo" />
        </div>
        <ul className="menu-list">
            <Link to="/category/productos"className="categoria">Productos</Link>
            <Link to="/category/precios"className="categoria">Precios</Link>
            <Link to="/category/contacto"className="categoria">Contacto</Link>
        </ul>
        <CartWidget/>
    </div>
    )
        
}
export default NavBar