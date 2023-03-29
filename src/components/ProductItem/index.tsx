import React from "react";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
import { IProduct } from "../../type/type";
import { useLocation } from "react-router-dom";
import { Context } from "../Context";

interface IProductItemProps {
  images: string;
  title: string;
  price: number;
  el: IProduct;
}

const ProductItem: React.FC<IProductItemProps> = ({
  el,
  title,
  price,
  images,
}) => {
  const [favoriteActive, setFavoriteActive] = React.useState(false);

  const value = React.useContext(Context);
  // add to cart - liked
  const handleFavorite = (el: any) => {
    setFavoriteActive(!favoriteActive);
    value?.addToFavorites(el);
  };

  const router = useLocation();
  // console.log( router);

  return (
    <div className="main-bottom__list_item">
      <span onClick={() => handleFavorite(el)} className="liked">
        <FaRegHeart />
      </span>
      <img src={images} alt="sa" />
      <h3 className="title">{title}</h3>
      <span className="price">{price} $</span>
      <span
        onClick={() => value?.dispatch({ type: "addToCart", payload: el })}
        className="basket"
      >
        <FaShoppingBag />
      </span>
      <span className="about">About</span>
    </div>
  );
};

export default ProductItem;
