import { IProduct } from "../type/type";
import { cartItems } from "../utils/cart";
import {
  ADD_TO_CART,
  DELETE_TO_CART,
  LOAD,
  REMOVE_CART,
} from "../type/reducerTypes";

localStorage.setItem("cart", JSON.stringify(cartItems));

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (!cartItems.includes(action.payload)) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartItems, action.payload])
        );
        cartItems.push(action.payload);
      } else {
        console.log("Your cart is empty");
        return state;
      }
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;

    case DELETE_TO_CART:
      const productsCart = localStorage.getItem("cart");
      if (productsCart !== null) {
        const productsPars = JSON.parse(productsCart);
        const productsFilter = productsPars.filter(
          (item: { id: number }) => item.id !== action.payload
        );
        localStorage.setItem("cart", JSON.stringify(productsFilter));
      }
      return [...state].filter((item) => item.id !== action.payload);

    case REMOVE_CART:
      let removeCartItems = localStorage.getItem("cart");
      if (removeCartItems !== null) {
        let removeCartItemsParse = JSON.parse(removeCartItems);
        removeCartItemsParse.length = 0;
        localStorage.setItem("cart", JSON.stringify(removeCartItemsParse));
      }
      let emptyArr: IProduct[] = [];
      state = emptyArr;
      return state;

    case LOAD:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
