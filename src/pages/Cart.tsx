import React from "react";
import CartItem from "../components/CartItem/CartItem";
import { Context } from "../components/Context";
import { IProduct } from "../type/type";
interface ICartProps {
  cartItems: IProduct[];
}
const Cart: React.FC<ICartProps> = ({ cartItems }) => {
  const value = React.useContext(Context);
  console.log(value?.state);
  const cartItemss = value?.state[1];
  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="cart-content">
        <ul>
          {cartItemss.length ? (
            cartItemss.map((obj: any) => {
              return (
                <CartItem
                  key={obj.id}
                  title={obj.title}
                  price={obj.price}
                  images={obj.images[0]}
                  id={obj.id}
                />
              );
            })
          ) : (
            <p>Empty</p>
          )}
        </ul>
        <div className="price-total">
          <h2>Total price</h2>
          <div className="price-total__top">
            <span className="count">Количество товаров:</span>
            <span>2 шт</span>
          </div>
          <div className="price-total__bottom">
            <span className="count">Стоимость:</span>
            <span>190000</span>
          </div>
          <div className="price-total__checkout">
            <div>
              <span>Всего к оплате</span>
              <span>20000 $</span>
            </div>
            <button>Оформить заказ</button>
            <button>Купить в рассрочку</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
