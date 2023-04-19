import { spawn } from "child_process";
import { validateHeaderValue } from "http";
import React, { useContext } from "react";
import MyButton from "../../components/UI/button/MyButton";
import MyInput from "../../components/UI/input/MyInput";
import { Context } from "../../context/Context";
import { GET_ORDER } from "../../type/reducerTypes";
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

  return (
    <div className="checkout">
      <div className="checkout-inner">
        <div className="order">
          <span onClick={() => setOrder(!order)} className="exitOrder">
            X
          </span>
          <h1>Order</h1>
          <ul>
            {value?.state.length > 1 ? (
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
          <span className="priceOrder">TOTAL PRICE $$</span>
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
                <MyButton>Reset</MyButton>
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
