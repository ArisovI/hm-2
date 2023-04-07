import React, { createContext } from "react";
import { IProduct } from "../type/type";
interface IContextValue {
  products: IProduct[];
  categoryId: number;
  setCategoryId: (i: number) => void;
}
export const Context = createContext<IContextValue | null>(null);
