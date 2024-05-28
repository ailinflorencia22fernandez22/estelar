import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)
  return (
    <Link to="/cart"  className="cart">
        <BsCart4 size={30}/>
        <p>{cantidadTotal()}</p>

    </Link>
  )
}

export default CartWidget