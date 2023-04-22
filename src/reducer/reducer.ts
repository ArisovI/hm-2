import { IProduct } from "../type/type";
import {
  ADD_TO_CART,
  DELETE_TO_CART,
  GET_ORDER,
  LOAD,
  REMOVE_CART,
  REMOVE_ITEM,
} from "../type/reducerTypes";
export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      const items = [...state];
      const findStateIndex = items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (findStateIndex !== -1) {
        items[findStateIndex].count++;
      } else {
        items.push({ ...action.payload, count: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(items));
      return items;

    case REMOVE_ITEM:
      const itemsRemoveItem = [...state];
      const findState = itemsRemoveItem.find(
        (item) => item.id === action.payload.id
      );

      if (!findState) {
        itemsRemoveItem.push({ ...action.payload, count: 1 });
        return itemsRemoveItem;
      } else {
        let filterItems = itemsRemoveItem.map((item) => {
          if (item.id === action.payload.id) {
            if (item.count > 1) {
              item.count--;
            }
          }
          return item;
        });

        localStorage.setItem("cart", JSON.stringify(filterItems));
        return filterItems;
      }

    case DELETE_TO_CART:
      const productsCart = localStorage.getItem("cart");
      if (productsCart !== null) {
        const productsPars = JSON.parse(productsCart);
        const productsFilter = productsPars.filter(
          (item: { id: number }) => item.id !== action.payload
        );
        localStorage.setItem("cart", JSON.stringify(productsFilter));
      }
      let deleteFilterState = [...state].filter(
        (item) => item.id !== action.payload
      );

      return deleteFilterState;

    case REMOVE_CART:
      let removeCartItems = localStorage.getItem("cart");
      if (removeCartItems !== null) {
        let removeCartItemsParse = JSON.parse(removeCartItems);
        removeCartItemsParse.length = 0;
        localStorage.setItem("cart", JSON.stringify(removeCartItemsParse));
      }
      let emptyArr: IProduct[] = [];
      return emptyArr;

    case LOAD:
      state = action.payload;
      return state;

    case GET_ORDER:
      let getOrder = localStorage.getItem("cart");
      if (getOrder !== null) {
        let getOrderParse = JSON.parse(getOrder);
        getOrderParse.length = 0;
        localStorage.setItem("cart", JSON.stringify(getOrderParse));
      } 
      let emptyCart: IProduct[] = [];
      alert("DONE");

      return emptyCart;

    default:
      return state;
  }
};
