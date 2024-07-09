import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  return (
    <>
      <div className="navSection">
        <div className="title">
          <Link to="/">
            <h2>V-MART</h2>
          </Link>
        </div>
        <div className="search">
          <input type="text" placeholder="Search . . . " />
        </div>
        <div classNAme="user">
          <div className="user-details">SignIN / SignUp</div>
          <Link to="/cart">
            <div className="cart">
              Cart
              <span>{cartItems.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles">
            <li>MOBILES</li>
          </Link>

          <Link to="/computers">
            <li>COMPUTERS</li>
          </Link>

          <Link to="/watch">
            <li>WATCHES</li>
          </Link>

          <Link to="/men">
            <li>MENSWEAR</li>
          </Link>

          <Link to="/woman">
            <li>WOMENSWEAR</li>
          </Link>

          <Link to="/furnitures">
            <li>FURNITURE</li>
          </Link>

          <Link to="/ac">
            <li>AC</li>
          </Link>

          <Link to="/kitchen">
            <li>KITCHEN</li>
          </Link>

          <Link to="/fridges">
            <li>FRIDGE</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
