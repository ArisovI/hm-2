import { spawn } from "child_process";
import { validateHeaderValue } from "http";
import React, { useContext } from "react";
import MyButton from "../../components/UI/button/MyButton";
import MyInput from "../../components/UI/input/MyInput";
import { Context } from "../../context/Context";
import { GET_ORDER, REMOVE_CART } from "../../type/reducerTypes";
import { IProduct } from "../../type/type";
import "./Checkout.scss";
interface ICheckoutProps {
  order: boolean;
  setOrder: (e: any) => void;
}
const Checkout: React.FC<ICheckoutProps> = ({ order, setOrder }) => {
  const value = useContext(Context);
  const handleForm = (e: any) => {
    e.preventDefault();
  };

  const totalPrice = value?.state.reduce((acc: any, product: any) => {
    return acc + product.price;
  }, 0);

  return (
    <div className="checkout">
      <div className="checkout-inner">
        <div className="order">
          <span onClick={() => setOrder(!order)} className="exitOrder">
            X
          </span>
          <h1>Order</h1>
          <ul>
            {value?.state.length > 0 ? (
              value?.state.map((obj: IProduct) => {
                return (
                  <li key={obj.id}>
                    <img src={obj.images[0]} alt="PICTURE" />
                    <h3>{obj.title}</h3>
                    <span>{obj.price} $</span>
                  </li>
                );
              })
            ) : (
              <span className="emptyOrder">EMPTY</span>
            )}
          </ul>
          <span className="priceOrder">Your total price {totalPrice} $</span>
          <div className="form">
            <form onSubmit={(e: any) => handleForm(e)}>
              <MyInput
                className="formAddres"
                type="text"
                placeholder="Укажите свой адрес"
              />

              <MyInput
                type="text"
                className="formPhone"
                placeholder="Укажите свой телефон"
              />
              <div className="btns">
                <MyButton
                  onClick={() => value?.dispatch({ type: REMOVE_CART })}
                >
                  Reset
                </MyButton>
                <MyButton onClick={() => value?.dispatch({ type: GET_ORDER })}>
                  Send
                </MyButton>
              </div>
            </form>
          </div>
        </div>
        <div className="maps"></div>
      </div>
    </div>
  );
};

export default Checkout;
