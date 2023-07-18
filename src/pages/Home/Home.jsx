import React from "react";

// Components
import Carousel from "../../components/Carousel/Carousel";
import CategoryCards from "../../components/Category/CategoryCards";
import PromoCards from "../../components/PromoCards/PromoCards";
import SingleRowContainer from "../../components/SingleRowContainer/SingleRowContainer";

const Home = () => {
  return (
    <div>
      <Carousel />
      <CategoryCards />
      <PromoCards />
      <SingleRowContainer />
    </div>
  );
};

export default Home;
