import React, { useContext, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome, FaUserAlt, FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import { Context } from "../../context/Context";
import MyInput from "../UI/input/MyInput";
import { exit } from "process";

const Header = () => {
  const routes: string[] = ["Home", "Cart"];
  const [exitActive, setExitActive] = useState(false);
  const value = useContext(Context);
  return (
    <div className="header">
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <div className="search">
        <MyInput
          value={value?.search}
          onChange={(e) => value?.setSearch(e.target.value)}
          type="text"
          placeholder="Search product..."
        />
        {value?.search && <MdClose onClick={() => value.setSearch("")} />}
      </div>
      <div className="right">
        <ul>
          {routes.map((item, i) => (
            <li key={i}>
              <Link to={item === "Home" ? "/" : item}>
                {item === "Cart" ? <FaShoppingCart /> : <FaHome />}
              </Link>
            </li>
          ))}
        </ul>
        {value?.userActive ? (
          <div className="user" onClick={() => setExitActive(!exitActive)}>
            <img src={value.userInfo.avatar} alt="" />
            <span>{value.userInfo.name}</span>
            {exitActive && (
              <span className="back" onClick={() => value?.logOut()}>
                Exit
              </span>
            )}
          </div>
        ) : (
          <Link to="/login">
            <div className="user">
              <FaUserAlt />
              <span>Login</span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
