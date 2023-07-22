import React from "react";

// Components
import Carousel from "../../components/Carousel/Carousel";
import CategoryCards from "../../components/Category/CategoryCards";
import PromoCards from "../../components/PromoCards/PromoCards";
import SingleRow from "../../components/ProductListing/SingleRow";
import DualRow from "../../components/ProductListing/DualRow";
import SaleTimer from "../../components/SaleTimer/SaleTimer";

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategoryCards />
      <PromoCards />

      {/* Single row products */}
      <SaleTimer />
      <SingleRow showTitle={false} />

      {/* Dual row products */}
      <DualRow listTitle={"New items"} showTitle={true} showButton={true} />

      <SingleRow listTitle={"Best sellers"} />
    </div>
  );
};

export default Home;
