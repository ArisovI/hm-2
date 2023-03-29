export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "addToCart":
      // setCartItems(
      // [...cartItems, el].filter(
      //   (el, id) => [...cartItems, el].indexOf(el) === id
      // )
      //   );
      if (state[1].includes(action.payload) === false) {
        state[1].push(action.payload);
      } else {
        console.log("tam uje est");
      }
      console.log(state);
      return state;

    case "default":
      return state;
  }
}
