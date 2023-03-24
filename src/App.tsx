import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { IProduct } from "./components/type/type";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import User from "./pages/User";
const App: React.FC = () => {
  const [item, setItem] = React.useState<IProduct[]>([]);
  const [categoryId, setCategoryId] = React.useState<number>(0);
  const [priceActive, setPriceActive] = React.useState<boolean>(false);
  const [favoriteEl, setFavoriteEl] = React.useState<IProduct[]>([]); // FAVORITE
  React.useEffect(() => {
    const fetchProducts = axios
      .get(
        `https://api.escuelajs.co/api/v1/products/?offset=0&limit=50
        ${"&categoryId="}${categoryId} `
      )
      .then((resp) => {
        const products = resp.data;
        setItem(products);
      });
  }, [categoryId]);

  const addToCart = (el: any) => {
    console.log(el);
  };

  const addToFavorites = (el: any) => {
    setFavoriteEl(
      [...favoriteEl, el].filter(
        (item, pos) => [...favoriteEl, el].indexOf(item) === pos
      )
    );
  };

  return (
    <div className="container">
      <Header
        categoryId={categoryId}
        setCategoryId={(el: any) => setCategoryId(el)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              item={item}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
              priceActive={priceActive}
              setPriceActive={setPriceActive}
            />
          }
        />
        <Route path="cart" element={<Cart />} />
        <Route
          path="favorites"
          element={
            <Favorites favoriteEl={favoriteEl} setFavoriteEl={setFavoriteEl} />
          }
        />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
};

export default App;
