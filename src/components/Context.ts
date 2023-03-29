import React, { createContext } from "react";
interface IContextValue {
  removeFavoriteEl: (e: any) => void;
  addToFavorites: (e: any) => void;
  removeCartItem: (e: any) => void;
  addToCart: (e: any) => void;
  back: () => void;
  next: () => void;
  dispatch: (el: any) => void;
  state: any;
}
export const Context = createContext<IContextValue | null>(null);
