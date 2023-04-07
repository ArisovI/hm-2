import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome, FaUserAlt, FaSearch } from "react-icons/fa";

const Header = () => {
  const routes: string[] = ["Home", "Cart"];

  return (
    <div className="header">
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <div className="search">
        <input type="text" placeholder="Search product..." />
        <button>
          <FaSearch />
        </button>
      </div>
      <div className="right">
        <ul>
          {routes.map((item, i) => (
            <li key={i} >
              <Link to={item === "Home" ? "/" : item}>
                {item === "Cart" ? <FaShoppingCart /> : <FaHome />}
              </Link>
            </li>
          ))}
        </ul>
        <div className="user">
          <FaUserAlt />
          <span>John</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
