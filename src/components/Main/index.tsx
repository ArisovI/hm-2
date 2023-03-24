import React from "react";
import { IProduct } from "../type/type";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";
interface IMainProps {
  item: IProduct[];
  addToCart: (e: any) => void;
  addToFavorites: (e: any) => void;
  priceActive: boolean;
  setPriceActive: (e: any) => void;
}

const Main: React.FC<IMainProps> = ({
  item,
  addToCart,
  addToFavorites,
  priceActive,
  setPriceActive,
}) => {
  const [value, setValue] = React.useState(100);
  const sad = (e: any) => {
    setValue(e.target.value);
  };
  const likedRef = React.useRef<HTMLSpanElement>(null);

  const favoriteAdd = (el: any) => {
    addToFavorites(el);
  };

  return (
    <main className="main">
      <div className="main-top">
        <h2>Main</h2>

        <span>Tabs</span>
      </div>
      <div className="main-bottom">
        <div className="main-bottom__filter">
          <h2>Filter</h2>
          <div className="filter">
            <div className="filter-item">
              <input type="checkbox" name="" id="alphabetId" />
              <label htmlFor="alphabetId">Alphabet</label>
            </div>
            <div className="filter-item">
              <input
                type="checkbox"
                onChange={(e) => e.target.value}
                name=""
                id="priceId"
                checked={priceActive}
              />
              <label
                onClick={() => setPriceActive(!priceActive)}
                htmlFor="priceId"
              >
                Price
              </label>
            </div>
            <div className="filter-item">
              <span>{value}</span>
              <input
                onChange={(e: any) => sad(e)}
                type="range"
                max="1000"
                min="0"
                step="10"
                multiple
                value={value}
              />
            </div>
          </div>
        </div>
        <div className="main-bottom__list">
          {item.map((el) => {
            return (
              <div key={el.id} className="main-bottom__list_item">
                <span
                  onClick={() => favoriteAdd(el)}
                  ref={likedRef}
                  className="liked"
                >
                  <FaRegHeart />
                </span>
                <img src={el.images[0]} alt="sa" />
                <h3 className="title">{el.title}</h3>
                <span className="price">{el.price} $</span>
                <span onClick={() => addToCart(el)} className="basket">
                  <FaShoppingBag />
                </span>
                <span className="about">About</span>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
