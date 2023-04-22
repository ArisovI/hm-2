import React, { useContext, useState } from "react";
import "./Cart.scss";
import { Context } from "../../context/Context";
import { IProduct } from "../../type/type";
import MyButton from "../../components/UI/button/MyButton";
import { MdDelete } from "react-icons/md";
import {
  ADD_TO_CART,
  DELETE_TO_CART,
  REMOVE_CART,
  REMOVE_ITEM,
} from "../../type/reducerTypes";
import { Link } from "react-router-dom";
import Checkout from "../../features/Checkout/Checkout";

const Cart = () => {
  const value = useContext(Context);
  const [order, setOrder] = useState<boolean>(false);
  let totalPrice = value?.state.reduce((acc: any, product: any) => {
    return acc + product.price * product.count;
  }, 0);

  let totalCount = value?.state.reduce((acc: any, product: any) => {
    return acc + product.count;
  }, 0);

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-content">
        <ul className="cart-content__list">
          {value?.state.length ? (
            value?.state.map((obj: IProduct) => (
              <li key={obj.id}>
                <img src={obj.images[0]} alt="" />
                <h3>{obj.title}</h3>
                <div className="counter">
                  <MyButton
                    onClick={() =>
                      value.dispatch({ type: REMOVE_ITEM, payload: obj })
                    }
                  >
                    -
                  </MyButton>
                  <span>{obj.count}</span>
                  <MyButton
                    onClick={() =>
                      value.dispatch({ type: ADD_TO_CART, payload: obj })
                    }
                  >
                    +
                  </MyButton>
                </div>
                <p>{obj.price} $</p>
                <MyButton
                  onClick={() =>
                    value.dispatch({ type: DELETE_TO_CART, payload: obj.id })
                  }
                >
                  <MdDelete />
                </MyButton>
              </li>
            ))
          ) : (
            <Link to="/">
              <MyButton>Your cart is empty</MyButton>
            </Link>
          )}
        </ul>
        <div className="cart-content__total">
          <h2>Сумма заказа</h2>
          <span>Количество товаров: {totalCount} шт</span>
          <span>Общая стоимость товаров: {totalPrice} $</span>
          <MyButton
            onClick={
              value?.state.length > 0
                ? () => setOrder(true)
                : () => setOrder(false)
            }
          >
            Оформить заказ
          </MyButton>
          <MyButton onClick={() => value?.dispatch({ type: REMOVE_CART })}>
            Очистить корзину
          </MyButton>
        </div>
      </div>
      {order ? <Checkout order={order} setOrder={setOrder} /> : null}
    </div>
  );
};

export default Cart;

/* const product = action.payload;
const items = [...state];
const findState = items.find((item) => item.id === product.id);
console.log(findState);

if (!findState) {
  items.push({ ...product, count: 1 });
  return items;
} else {
  let filterItems = items.map((item) => {
    item.count++;
    return item;
  });

  localStorage.setItem("cart", JSON.stringify(filterItems));
  return filterItems; */
