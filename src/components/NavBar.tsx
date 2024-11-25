import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <Link to={"/"}>Home</Link>
          <Link to={"/cart"}>cart</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
