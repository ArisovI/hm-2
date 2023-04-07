import React, { useContext } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { Context } from "../../context/Context";
import "./Home.scss";
const Home = () => {
  const value = useContext(Context);
  const category: string[] = [
    "electronics",
    "furniture",
    "shoes",
    "tthers",
    "nueva categoria",
    "new",
    "clothes",
    "hola Mundo",
  ];

  return (
    <div className="home">
      <ul className="category">
        {category.map((item, i) => (
          <li
            className={value?.categoryId === i ? "active" : ""}
            key={i}
            onClick={() => value?.setCategoryId(i)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="home-content">
        <div className="filter">Filter</div>
        <div className="content">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
