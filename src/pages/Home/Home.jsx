import React from "react";

// Components
import Carousel from "../../components/Carousel/Carousel";
import CategoryCards from "../../components/Category/CategoryCards";
import PromoCards from "../../components/PromoCards/PromoCards";
import SingleRow from "../../components/ProductListing/SingleRow";
import DualRow from "../../components/ProductListing/DualRow";

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategoryCards />
      <PromoCards />

      {/* Single row products */}
      <SingleRow listTitle={"On sale!"} />

      {/* Dual row products */}
      <DualRow listTitle={"New items"} showTitle={true} />

      <SingleRow listTitle={"Best sellers"} />
    </div>
  );
};

export default Home;
