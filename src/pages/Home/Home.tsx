import React, { useContext, useEffect, useMemo, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { Context } from "../../context/Context";
import ReactPaginate from "react-paginate";
import "./Home.scss";
import { IProduct } from "../../type/type";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
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
        <div className="filter">Filter</div>
        <div className="content">
          <ProductList currentItems={currentItems} />
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<FaLongArrowAltRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<FaLongArrowAltLeft />}
      />
    </div>
  );
};

export default Home;
