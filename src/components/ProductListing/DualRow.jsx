import React from "react";

import ButtonRightIcon from "../Buttons/ButtonSmall";
import ProductCard from "../ProductCard/ProductCard";

const DualRow = ({ listTitle, showTitle, showButton }) => {
  return (
    <div className="pb-10">
      {showTitle && (
        <div className="mb-4">
          <h2 className="title font-bold">{listTitle}</h2>
        </div>
      )}
      <div className="flex justify-between gap-md pb-4">
        {Array(6)
          .fill(true)
          .map((_, i) => (
            <ProductCard key={i} />
          ))}
      </div>
      <div className="flex justify-between gap-md pb-4">
        {Array(6)
          .fill(true)
          .map((_, i) => (
            <ProductCard key={i} />
          ))}
      </div>
      {showButton && (
        <div className="flex justify-center ">
          <ButtonRightIcon buttonTxt={"See more"} showIcon={true} />
        </div>
      )}
    </div>
  );
};

export default DualRow;
