import React from "react";
import { FaShopify } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import "./Nav.css";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"

const Nav = () => {
  let dispatch =useDispatch()
  let items=useSelector(state=>state)
  return (
    <div className="nav">
      <div className="top-nav">
       <Link to="/">  <div className="logo">
          <span>V-Shop</span>
          <FaShopify />
        </div>  </Link>
        <form className="search-box">
          <input type="text" placeholder=" Search Items.." />
          <button>
            <HiOutlineSearch />
          </button>
        </form>
        <Link to="/cart"><div className="cart-box">
          <FaShoppingCart />
          <span>{items.cart.length}</span>
        </div>
        </Link>
      </div>
      <div className="bottom-nav">
        <Link to="/"> <li>Home</li> </Link>
        <Link to="/shop"> <li>Shop</li> </Link>
        <Link to="/cart"> <li>Cart</li> </Link>
        <Link to="/contact"><li>Contact</li> </Link>
      </div>
    </div>
  );
};

export default Nav;
