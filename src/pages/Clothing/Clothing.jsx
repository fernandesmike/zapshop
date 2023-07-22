import React from "react";

// Assets
import ClothesBanner from "../../assets/carousel-images/clothes_banner.png";

// Components
import ClothesFilter from "../../components/Filters/ClothesFilter";
import ProductCard from "../../components/ProductCard/ProductCard";
import Tags from "../../components/Tags/Tags";

const Clothing = () => {
  return (
    <div className="flex flex-col gap-lg mb-6">
      {/* Banner container */}
      <div>
        <img
          className="w-full max-h-[325px] min-h-[325px] rounded"
          src={ClothesBanner}
        />
      </div>

      {/* Filters and Product lising container */}
      <div className="flex gap-md">
        {/* Filters container */}
        <div className="">
          <ClothesFilter />
        </div>

        {/* Product list */}
        <div className="w-full">
          {/* Header */}
          <div className="flex gap-md pb-4 mb-6 items-center">
            <p className="body text-primary font-bold">Applied filters: </p>
            <Tags txtContent={"Men's clothes"} />
            <Tags txtContent={"Overseas"} />
            <Tags txtContent={"Cash on delivery"} />
          </div>

          {/* Product listings */}
          {/* TODO: Fucking fix this shit! */}
          <div className="flex flex-col gap-md">
            <div className="flex gap-md ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="flex gap-md ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="flex gap-md ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="flex gap-md ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="flex gap-md ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="flex gap-md ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="flex gap-md ">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>

      {/* Pagination container */}
      <div className="flex justify-end py-6">
        <div className="flex justify-center gap-md">
          <p className="body font-bold min-h-[42px] min-w-[42px] max-w-[42px] px-4 py-2 rounded border-2 border-brand-accent hover:cursor-pointer">
            1
          </p>
          <p className="body min-h-[42px] min-w-[42px] max-w-[42px] px-4 py-2 rounded border-2 hover:cursor-pointer">
            2
          </p>
          <p className="body min-h-[42px] min-w-[42px] max-w-[42px] px-4 py-2 rounded border-2 hover:cursor-pointer">
            3
          </p>
          <p className="body min-h-[42px] min-w-[42px] max-w-[42px] px-4 py-2 rounded border-2 hover:cursor-pointer">
            4
          </p>
          <p className="body min-h-[42px] min-w-[42px] max-w-[42px] px-4 py-2 rounded border-2 hover:cursor-pointer">
            5
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clothing;
