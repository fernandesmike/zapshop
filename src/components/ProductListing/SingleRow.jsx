import React from "react";

import ButtonRightIcon from "../Buttons/ButtonrIGHTIcon";
import ProductCard from "../ProductCard/ProductCard";

const SingleRow = ({ listTitle }) => {
  return (
    <div className="pb-10">
      <div className="mb-4">
        <h2 className="title font-bold">{listTitle}</h2>
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

export default SingleRow;
