import React, { useState, useEffect, useReducer, memo, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import axios from "axios";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { IProduct } from "./type/type";
import AboutItem from "./pages/AboutItem/AboutItem";
import Login from "./pages/Login/Login";
import { reducer } from "./reducer/reducer";
import { LOAD } from "./type/reducerTypes";
import Cart from "./pages/Cart/Cart";
import { cartItems } from "./utils/cart";
const App: React.FC = () => {
  const [userActive, setUserActive] = useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);
  const [state, dispatch] = useReducer(reducer, cart);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userInfo, setUserInfo] = useState({});

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [itemPrice, setItemsPrice] = useState<number>(0);
  useEffect(() => {
    if (cartItems.length !== 0) {
      dispatch({ type: LOAD, payload: cartItems });
    }
    const fetchProducts = async () => {
      try {
        const res = await axios.get<IProduct[]>(
          `https://api.escuelajs.co/api/v1/${
            categoryId === 0 ? "products" : `categories/${categoryId}/products`
          }`
        );
        if (res.status === 200) {
          setProducts(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    setIsLoading(true);
    fetchProducts();
  }, [categoryId]);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/auth/profile",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        );
        setUserInfo(response.data);
        console.log(response);

        setUserActive(true);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, [userActive]);

  const checkLogin = () => {
    if (email.length > 0 || password.length > 0) {
      const fetchAuth = async () => {
        try {
          const response = await axios.post(
            "https://api.escuelajs.co/api/v1/auth/login",
            { email: email, password: password }
          );
          setUserActive(true);
          localStorage.setItem("user", response.data.access_token);
          console.log(response);
        } catch (error) {
          alert("Email and Passport don't match ");

          console.log(error);
        }
      };
      fetchAuth();
    } else {
      alert("You didn't write anything");
    }
  };

  const logOut = () => {
    setUserActive(false);
    localStorage.removeItem("user");
  };

  let cartLength = state.length > 0 ? state.length : "";

  const value = {
    cartLength,
    products,
    categoryId,
    setCategoryId,
    userActive,
    setUserActive,
    dispatch,
    state,
    search,
    setSearch,
    isLoading,
    checkLogin,
    email,
    setEmail,
    password,
    setPassword,
    userInfo,
    logOut,
    itemPrice,
    setItemsPrice,
  };

  return (
    <Context.Provider value={value}>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<AboutItem />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </Context.Provider>
  );
};

export default App;
