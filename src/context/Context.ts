import React, { createContext } from "react";
import { IProduct, IUserInfo } from "../type/type";
interface IContextValue {
  products: IProduct[];
  categoryId: number;
  setCategoryId: (i: number) => void;
  dispatch: (e: any) => void;
  state: any;
}
export const Context = createContext<IContextValue | null>(null);

// email: "john@mail.com",
// password: "changeme",
