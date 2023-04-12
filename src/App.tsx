import React, { useState, useEffect, useReducer } from "react";
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

  // useEffect(() => {

  // }, []);
  useEffect(() => {
    if (cartItems.length !== 0) {
      dispatch({ type: LOAD, payload: cartItems });
    }
    const fetchProducts = async () => {
      try {
        const res = await axios.get<IProduct[]>(
          "https://api.escuelajs.co/api/v1/products?offset=10&limit=10"
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const value = {
    products,
    categoryId,
    setCategoryId,
    userActive,
    setUserActive,
    dispatch,
    state,
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
