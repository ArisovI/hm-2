import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

interface IHeaderProps {
  categoryId: number;
  setCategoryId: (el: any) => void;
  favoriteEl: number;
  cartItems: number;
}

const Header: React.FC<IHeaderProps> = ({
  categoryId,
  setCategoryId,
  favoriteEl,
  cartItems,
}) => {
  const category: string[] = [
    "All",
    "Nuevo",
    "Electronics",
    "Furniture",
    "Shoes",
    "Others",
  ];
  return (
    <header className="header">
      <div className="header-top">
        <Link to="/">
          <h2>Logo</h2>
        </Link>
        <ul>
          <li>
            <Link to="cart">
              <FaShoppingCart />
              <span className="favoriteLength">
                {cartItems > 0 ? cartItems : ""}
              </span>
            </Link>
          </li>
          <li>
            <Link to="favorites">
              <FaHeart />
              <span className="favoriteLength">
                {favoriteEl > 0 ? favoriteEl : ""}
              </span>
            </Link>
          </li>
          <li>
            <Link to="user">
              <FaUser />
            </Link>
          </li>
        </ul>
      </div>
      <div className="header-bottom">
        <ul className="navbar">
          {category.map((el, i) => {
            return (
              <li
                onClick={() => setCategoryId(i)}
                className={categoryId === i ? "navbar-li active" : "navbar-li"}
                key={i}
              >
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
