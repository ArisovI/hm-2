import React from "react";
import { Context } from "../Context";
interface ICartItemProps {
  price: number;
  title: string;
  images: string;
  id: number;
}
const CartItem: React.FC<ICartItemProps> = ({ price, title, images, id }) => {
  const value = React.useContext(Context);
  return (
    <>
      <li>
        <img src={images} alt={images} />
        <h3>{title}</h3>
        <div className="counts">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <span>{price} $</span>
        <button onClick={() => value?.removeCartItem(id)}>X</button>
      </li>
    </>
  );
};

export default CartItem;
