import  CartWidget from "./CartWidget"
import ItemListContainer from "./ItemListContainer"
import "./NavBar.css"

const NavBar = () => {
    return(
        <div className="container-menu">
        <ul>
            <li>Variedades</li>
            <li>Contacto</li>
            <li>Quienes Somos</li>
            <li className="logo">
                <img src="https://i.pinimg.com/564x/b9/74/03/b97403c7331af47731f1d62379783787.jpg" alt="Logo" />
            </li>
        </ul>
        <CartWidget/>
    </div>
    )
}
export default NavBar