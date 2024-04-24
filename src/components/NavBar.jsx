import  CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import "./NavBar.css"


const NavBar = () => {
    return(
    <div className="container-menu">
         <div className="logo">
            <img src="https://i.pinimg.com/564x/b9/74/03/b97403c7331af47731f1d62379783787.jpg" alt="Logo" />
        </div>
        <ul className="menu-list">
            <li>Variedades</li>
            <li>Contacto</li>
            <li>Quienes Somos</li>
        </ul>
        <CartWidget/>
    </div>
    )
        
}
export default NavBar