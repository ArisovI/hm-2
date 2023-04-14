import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { IProduct } from "../../type/type";
import ProductItem from "../ProductItem/ProductItem";
import Skeleton from "../Skeleton/Skeleton";
import "./ProductList.scss";
interface IProductListProps {
  currentItems: IProduct[];
}
const ProductList: React.FC<IProductListProps> = ({ currentItems }) => {
  const value = useContext(Context);
  let inputValue = value?.search ? value.search : "";
  return (
    <ul className="productList">
      {value?.isLoading
        ? [...new Array(10)].map((_, i) => <Skeleton key={i} />)
        : currentItems
            .filter((obj) => {
              if (obj.title.toLowerCase().includes(inputValue.toLowerCase())) {
                return true;
              }
              return false;
            })
            .map((obj) =>
              value?.isLoading ? (
                <Skeleton />
              ) : (
                <ProductItem key={obj.id} obj={obj} />
              )
            )}
    </ul>
  );
};

export default ProductList;
