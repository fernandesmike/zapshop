import React from "react";

// Styling
import "../../styles/typography.css";

import ProductCard from "../ProductCard/ProductCard";

const SingleRowContainer = () => {
  return (
    <div>
      <div className="py-4">
        <h2 className="title font-bold">Best sellers</h2>
      </div>
      <div className="flex justify-between">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default SingleRowContainer;
