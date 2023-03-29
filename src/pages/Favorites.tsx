import React from "react";
import FavoriteItem from "../components/FavoriteItem";
import { IProduct } from "../type/type";

interface IFavoritesProps {
  favoriteEl: IProduct[];
  setFavoriteEl: (el: any) => void;
}
const Favorites: React.FC<IFavoritesProps> = ({ favoriteEl }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <div className="favorites-list">
        {favoriteEl.length ? (
          favoriteEl.map((el, i) => {
            return (
              <FavoriteItem
                key={i}
                images={el.images[0]}
                favoriteEl={favoriteEl}
                id={el.id}
                description={el.description}
                title={el.title}
                price={el.price}
                el={el}
              />
            );
          })
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
