import React, { useContext } from "react";

//Anithing
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { IProduct } from "./type/type";
import { Context } from "./components/Context";
import reducer from "./components/reducer";
//Components
import Header from "./components/Header";

//Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import User from "./pages/User";
const App: React.FC = () => {
  const [item, setItem] = React.useState<IProduct[]>([]);
  const [categoryId, setCategoryId] = React.useState<number>(0);
  const [priceActive, setPriceActive] = React.useState<boolean>(false);
  const [cartItems, setCartItems] = React.useState<IProduct[]>([]);
  const initialState: any = [cartItems, item];
  const [state, dispatch] = React.useReducer(reducer, initialState);
  //Cart

  //Favorites
  const [favoriteEl, setFavoriteEl] = React.useState<IProduct[]>([]);
  //Pagination
  const [currentPage, setCurrentPage] = React.useState(0);
  const next = () => {
    setCurrentPage(currentPage + 10);
    console.log(currentPage);
  };
  const back = () => {
    setCurrentPage(currentPage !== 0 ? currentPage - 10 : 0);
    console.log(currentPage);
  };
  React.useEffect(() => {
    const fetchProducts = axios
      .get(
        `https://api.escuelajs.co/api/v1/products/?offset=${currentPage}&limit=10
        ${"&categoryId="}${categoryId} `
      )
      .then((resp) => {
        setItem(resp.data);
      });
  }, [categoryId, currentPage]);

  //Add to cart
  const addToCart = (el: any) => {
    setCartItems(
      [...cartItems, el].filter(
        (el, id) => [...cartItems, el].indexOf(el) === id
      )
    );
  };
  //del to cart
  const removeCartItem = (i: any) => {
    setCartItems(
      [...cartItems].filter((el) => {
        return el.id !== i;
      })
    );
  };

  //Add to favorites
  const addToFavorites = (obj: any) => {
    if (favoriteEl.includes(obj) === false) {
      setFavoriteEl(
        [...favoriteEl, obj].filter(
          (el, id) => [...favoriteEl, el].indexOf(el) === id
        )
      );
    } else {
      setFavoriteEl([...favoriteEl].filter((item) => item.id !== obj.id));
    }
    // if (favoriteEl.includes(el)) {
    //   setFavoriteEl(favoriteEl.filter((id) => id !== el.id));
    // } else {
    //   setFavoriteEl([...favoriteEl, el]);
    // }
  };

  const removeFavoriteEl = (i: any) => {
    setFavoriteEl(
      [...favoriteEl].filter((el) => {
        return el.id !== i;
      })
    );
  };
  const value = {
    addToFavorites,
    removeCartItem,
    addToCart,
    removeFavoriteEl,
    back,
    next,
    dispatch,
    state
  };
  return (
    <Context.Provider value={value}>
      <div className="container">
        <Header
          categoryId={categoryId}
          setCategoryId={(el: any) => setCategoryId(el)}
          favoriteEl={favoriteEl.length}
          cartItems={cartItems.length}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                item={item}
                priceActive={priceActive}
                setPriceActive={setPriceActive}
              />
            }
          />
          <Route path="cart" element={<Cart cartItems={cartItems} />} />
          <Route
            path="favorites"
            element={
              <Favorites
                favoriteEl={favoriteEl}
                setFavoriteEl={setFavoriteEl}
              />
            }
          />
          <Route path="user" element={<User />} />
        </Routes>
      </div>
    </Context.Provider>
  );
};

export default App;
