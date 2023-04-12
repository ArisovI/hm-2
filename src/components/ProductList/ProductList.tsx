import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ProductItem from "../ProductItem/ProductItem";
import "./ProductList.scss";
const ProductList = () => {
  const value = useContext(Context);

  return (
    <ul className="productList">
      {value?.products.map((obj) => (
        <ProductItem key={obj.id} obj={obj} />
      ))}
    </ul>
  );
};

export default ProductList;
