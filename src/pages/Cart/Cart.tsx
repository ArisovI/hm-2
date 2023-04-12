import React, { useContext, useState } from "react";
import "./Cart.scss";
import { Context } from "../../context/Context";
import { IProduct } from "../../type/type";
import MyButton from "../../components/UI/button/MyButton";
import { MdDelete } from "react-icons/md";
import { DELETE_TO_CART, REMOVE_CART } from "../../type/reducerTypes";
import { Link } from "react-router-dom";

const Cart = () => {
  const value = useContext(Context);

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
                  <MyButton>-</MyButton>
                  <span>0</span>
                  <MyButton>+</MyButton>
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
          <span>Количество товаров: 0 шт</span>
          <span>Общая стоимость товаров: 0 $</span>
          <MyButton>Оформить заказ</MyButton>
          <MyButton onClick={() => value?.dispatch({ type: REMOVE_CART })}>
            Очистить корзину
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default Cart;
