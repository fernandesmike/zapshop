import React from "react";

// Components
import Carousel from "../../components/Carousel/Carousel";
import CategoryCards from "../../components/Category/CategoryCards";
import PromoCards from "../../components/PromoCards/PromoCards";
import ProductCard from "../../components/ProductCard/ProductCard";
import ButtonRightIcon from "../../components/Buttons/ButtonrIGHTIcon";

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategoryCards />
      <PromoCards />

      {/* Single row products */}
      <div className="py-10">
        <div className="mb-4">
          <h2 className="title font-bold">Best sellers</h2>
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

      {/* Dual row products */}
      <div className="py-10">
        <div className="mb-4">
          <h2 className="title font-bold">New items</h2>
        </div>
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

      <div className="py-10">
        <div className="mb-4">
          <h2 className="title font-bold">Best sellers</h2>
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
    </div>
  );
};

export default Home;
