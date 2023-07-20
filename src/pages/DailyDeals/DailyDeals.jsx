import React from "react";

// Components
import Tags from "../../components/Tags/Tags";
import ProductCard from "../../components/ProductCard/ProductCard";

const DailyDeals = () => {
  return (
    <div className="flex flex-col gap-lg py-10">
      {/* Title and tag container */}
      <div className="flex flex-col items-center gap-lg">
        <h1 className="heading-a font-bold">Today's deals</h1>

        {/* Tags */}
        <div className="flex gap-md">
          <Tags txtContent={"Shoes"} />
          <Tags txtContent={"Electronics"} />
          <Tags txtContent={"2nd hand"} />
          <Tags txtContent={"Lightning shoes"} />
          <Tags txtContent={"Mc Queen"} />
        </div>
      </div>

      {/* Product cards container */}
      <div>
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
      </div>

      <div className="flex justify-center ">
        <p className="body text-secondary">
          Come back tomorrow for more exciting deals!
        </p>
      </div>
    </div>
  );
};

export default DailyDeals;
