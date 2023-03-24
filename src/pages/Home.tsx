import React from "react";
import Main from "../components/Main";
import { IProduct } from "../components/type/type";

interface IHomeProps {
  item: IProduct[];
  addToCart: (e: any) => void;
  addToFavorites: (e: any) => void;
  priceActive: boolean;
  setPriceActive: (e: any) => void;
}

const Home: React.FC<IHomeProps> = ({
  item,
  addToCart,
  addToFavorites,
  priceActive,
  setPriceActive,
}) => {
  return (
    <>
      <Main
        item={item}
        addToCart={addToCart}
        addToFavorites={addToFavorites}
        priceActive={priceActive}
        setPriceActive={setPriceActive}
      />
    </>
  );
};

export default Home;
