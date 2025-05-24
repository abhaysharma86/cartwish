import React from "react";
import "./Navbar.css";
import rocket from "../../assets/rocket.png";
import Login from "../../assets/login.png";
import SignUp from "../../assets/signup.png";
import Product from "../../assets/product.png";
import Order from "../../assets/order.png";
import Logout from "../../assets/logout.png";
import LinkWithIcons from "./LinkWithIcons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="align_center navbar">
      <div className="align_center">
        <h1 className="navbar_heading">CartWish</h1>
        <form className="align_center navbar_form">
          <input
            type="text"
            className="navbar_search"
            placeholder="Search Products"
          />
          <button type="submit" className="search_button">
            Search
          </button>
        </form>
      </div>
      <div className="align_center navbar_link">
        <LinkWithIcons title="Home" link="/" emoji={rocket} />
        <LinkWithIcons title="Products" link="/products" emoji={Product} />
        <LinkWithIcons title="Login" link="/login" emoji={Login} />
        <LinkWithIcons title="SignUp" link="/signup" emoji={SignUp} />
        <LinkWithIcons title="My Orders" link="/myorder" emoji={Order} />
        <LinkWithIcons title="Logout" link="/logout" emoji={Logout} />
        <NavLink to="/cart" className="align_center">
          Cart <p className="align_center cart_counts">0</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
