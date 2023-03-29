import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { IProduct } from "../../type/type";
import { Context } from "../Context";
interface IFavoriteItemProps {
  favoriteEl: IProduct[];
  id: number;
  images: string;
  description: string;
  title: string;
  price: number;
  el: IProduct;
}

const FavoriteItem: React.FC<IFavoriteItemProps> = ({
  favoriteEl,
  id,
  images,
  description,
  title,
  price,
  el,
}) => {
  const value = React.useContext(Context);
  return (
    <div>
      {favoriteEl.length ? (
        <div className="favorites-list__item">
          <span onClick={() => value?.removeFavoriteEl(id)} className="del">
            Delete
          </span>
          <img src={images} alt="asd" />
          <h3 className="title">{title}</h3>
          <p>{description}</p>
          <span className="price">{price}</span>
          <div className="buy">
            <button onClick={() => value?.addToCart(el)}>
              <FaShoppingBag />
            </button>
            <button>In installments</button>
          </div>
        </div>
      ) : (
        <p className="noneInfo">Empty</p>
      )}
    </div>
  );
};

export default FavoriteItem;
