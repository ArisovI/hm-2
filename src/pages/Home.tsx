import React from "react";
import Main from "../components/Main";
import Pagination from "../components/Pagination";
import { IProduct } from "../type/type";

interface IHomeProps {
  item: IProduct[];

  priceActive: boolean;
  setPriceActive: (e: any) => void;
}

const Home: React.FC<IHomeProps> = ({ item, priceActive, setPriceActive }) => {
  return (
    <>
      <Main
        item={item}
        priceActive={priceActive}
        setPriceActive={setPriceActive}
      />
      <Pagination />
    </>
  );
};

export default Home;
