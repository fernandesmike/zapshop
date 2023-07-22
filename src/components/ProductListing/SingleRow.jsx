import React from "react";

import ButtonSmall from "../Buttons/ButtonSmall";
import ProductCard from "../ProductCard/ProductCard";

const SingleRow = ({ listTitle }) => {
  return (
    <div className="pb-10">
      <div className="mb-4">
        <h2 className="title font-bold">{listTitle}</h2>
      </div>
      <div className="flex justify-between gap-md pb-4">
        {Array(6)
          .fill(true)
          .map((_, i) => (
            <ProductCard key={i} />
          ))}
      </div>
      <div className="flex justify-center ">
        <ButtonSmall buttonTxt={"See more"} showIcon={true} />
      </div>
    </div>
  );
};

export default SingleRow;
