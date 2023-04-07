import React from "react";
import { IProduct } from "../../type/type";
import MyButton from "../UI/button/MyButton";
import { FaShoppingBag } from "react-icons/fa";
import { MdInfo } from "react-icons/md";
import { Link } from "react-router-dom";
import "./ProductItem.scss";
interface IProductItemProps {
  obj: IProduct;
}
const ProductItem: React.FC<IProductItemProps> = ({ obj }) => {
  return (
    <li className="productItem">
      <img src={obj.images[0]} alt={obj.images[0]} />
      <h3>{obj.title}</h3>
      <div>
        <span>{obj.price} $</span>
        <div>
          <Link to={`product/${obj.id}`}>
            <MyButton>
              <MdInfo />
            </MyButton>
          </Link>
          <MyButton>
            <FaShoppingBag />
          </MyButton>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
