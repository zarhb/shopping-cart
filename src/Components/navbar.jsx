import { RiShoppingCartLine } from "react-icons/ri";
import React from "react";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart ,amount,total} = useCartContext();
  return (
    <header className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container">
        <a className="navbar-tool ms-3">
          {cart.length !== 0 ? (
            <div className="navbar-tool-icon-box bg-secondary">
              <span className="navbar-tool-label">{cart.length }</span>
              <RiShoppingCartLine className="navbar-tool-icon" />
            </div>
          ) : (
            <div className="navbar-tool-icon-box bg-secondary">
              <RiShoppingCartLine className="navbar-tool-icon" />
            </div>
          )}
        </a>
        <p className="h3 mb-0 text-light">useContext & useReducer</p>
      </div>
    </header>
  );
};

export default Navbar;
