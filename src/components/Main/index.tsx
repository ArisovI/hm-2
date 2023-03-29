import React from "react";
import { IProduct } from "../../type/type";
import ProductItem from "../ProductItem";
import { Context } from "../Context";
interface IMainProps {
  item: IProduct[];

  priceActive: boolean;
  setPriceActive: (e: any) => void;
}

const Main: React.FC<IMainProps> = ({
  item,

  priceActive,
  setPriceActive,
}) => {
  const value = React.useContext(Context);

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
              <span>0</span>
              <input type="range" max="1000" min="0" step="10" />
            </div>
          </div>
        </div>
        <div className="main-bottom__list">
          {item.map((el) => {
            return (
              <ProductItem
 
                key={el.id}
                images={el.images[0]}
                title={el.title}
                price={el.price}
                el={el}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Main;
