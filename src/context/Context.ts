import React, { createContext } from "react";
import { IProduct, IUserInfo } from "../type/type";
interface IContextValue {
  products: IProduct[];
  categoryId: number;
  setCategoryId: (i: number) => void;
  dispatch: (e: any) => void;
  state: any;
  search: string;
  setSearch: (e: any) => void;
  isLoading: boolean;
  userActive: boolean;
  checkLogin: () => void;
  email: string;
  setEmail: (e: any) => void;
  password: string;
  setPassword: (e: any) => void;
  userInfo: any;
  logOut: () => void;
  cartLength: number;
  itemPrice: number;
  setItemsPrice: (e: any) => void;
}
export const Context = createContext<IContextValue | null>(null);
