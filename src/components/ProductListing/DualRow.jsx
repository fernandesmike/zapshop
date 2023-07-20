import React, { useEffect, useState } from "react";

import ButtonRightIcon from "../Buttons/ButtonrIGHTIcon";
import ProductCard from "../ProductCard/ProductCard";

const DualRow = ({ listTitle, showTitle }) => {
  // Populate the state with a total of 6 products
  const { productList, setProductList } = useState([]);

  useEffect({});

  return (
    <div className="pb-10">
      {showTitle && (
        <div className="mb-4">
          <h2 className="title font-bold">{listTitle}</h2>
        </div>
      )}
      <div className="flex justify-between gap-md pb-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-between gap-md pb-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="flex justify-center ">
        <ButtonRightIcon buttonTxt={"See more"} />
      </div>
    </div>
  );
};

export default DualRow;
