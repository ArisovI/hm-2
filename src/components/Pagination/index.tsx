import React from "react";
import { Context } from "../Context";
interface IPaginationProps {

}
const Pagination: React.FC<IPaginationProps> = () => {
  const value = React.useContext(Context);
  return (
    <div style={{ textAlign: "center", background: "red", marginTop: "20px" }}>
      <button onClick={() => value?.back()}>Back</button>
      <button onClick={() => value?.next()}>Next</button>
    </div>
  );
};

export default Pagination;
