import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";
import axios from "axios";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { IProduct } from "./type/type";
import AboutItem from "./pages/AboutItem/AboutItem";

const App: React.FC = () => {
  const [categoryId, setCategoryId] = useState<number>(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
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
  };
  return (
    <Context.Provider value={value}>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<AboutItem />} />
          {/* <Route path="cart" element={<Cart />} /> */}
          {/* <Route path=":id" element={<CartItemBlog />} /> */}
          {/* <Route path="user" element={<User />} /> */}
        </Routes>
      </div>
    </Context.Provider>
  );
};

export default App;
