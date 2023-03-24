import React from "react";
import { FaShoppingBag } from "react-icons/fa";

import { IProduct } from "../components/type/type";
interface IFavoritesProps {
  favoriteEl: IProduct[];
  setFavoriteEl: (el: any) => void;
}
const Favorites: React.FC<IFavoritesProps> = ({
  favoriteEl,
  setFavoriteEl,
}) => {
  const removeFavoriteEl = (i: any) => {
    setFavoriteEl(
      [...favoriteEl].filter((el) => {
        return el.id !== i;
      })
    );
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favoriteEl.length ? (
          favoriteEl.map((el) => {
            return (
              <div key={el.id} className="favorites-list__item">
                <span onClick={() => removeFavoriteEl(el.id)} className="del">
                  Delete
                </span>
                <img src={el.images[0]} alt={el.images[0]} />
                <h3 className="title">{el.title}</h3>
                <p>{el.description}</p>
                <span className="price">{el.price}</span>
                <div className="buy">
                  <button>
                    <FaShoppingBag />
                  </button>
                  <button>In installments</button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="noneInfo">Empty</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
