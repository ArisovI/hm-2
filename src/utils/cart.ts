import { IProduct } from "../type/type";
let checkCartInCloud = localStorage.getItem("cart");
export let cartItems: IProduct[] = [];
if (checkCartInCloud !== null) {
  cartItems = JSON.parse(checkCartInCloud);
}
