import React, { useContext, useEffect, useMemo, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { Context } from "../../context/Context";
import ReactPaginate from "react-paginate";
import "./Home.scss";
import { IProduct } from "../../type/type";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import MyButton from "../../components/UI/button/MyButton";
import MyInput from "../../components/UI/input/MyInput";
const Home = () => {
  const value = useContext(Context);

  const data = value?.products ? value.products : [];

  const category: string[] = [
    "all",
    "electronics",
    "furniture",
    "shoes",
    "others",
    "clothes",
  ];

  //paginate
  const [currentItems, setCurrentItems] = useState<IProduct[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

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
        <div className="filter">
          <div className="filterRange">
            <MyInput
              type="range"
              min="0"
              max="1000"
              value={value?.filterMinPrice}
              onChange={(e: any) => value?.setFilterMinPrice(e.target.value)}
            />
            <span>{value?.filterMinPrice}</span>
          </div>
          <div className="filterRange">
            <MyInput
              type="range"
              min="0"
              max="1000"
              value={value?.filterMaxPrice}
              onChange={(e: any) => value?.setFilterMaxPrice(e.target.value)}
            />
            <span>{value?.filterMaxPrice}</span>
          </div>

          <MyButton onClick={() => value?.handleFilter()}>Filter</MyButton>
        </div>
        <div className="content">
          <ProductList currentItems={currentItems} />
        </div>
      </div>
      {value?.search !== "" ? (
        ""
      ) : (
        <ReactPaginate
          breakLabel="..."
          nextLabel={<FaLongArrowAltRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel={<FaLongArrowAltLeft />}
        />
      )}
    </div>
  );
};

export default Home;
