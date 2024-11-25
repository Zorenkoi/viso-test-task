import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const NavBar = () => {
  const { mealsFromCart } = useCart();

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>Cart ({mealsFromCart.length})</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
