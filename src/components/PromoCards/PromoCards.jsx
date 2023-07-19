import React from "react";

// Assets
import slide_a from "../../assets/carousel-images/carousel_a.png";
import slide_b from "../../assets/carousel-images/carousel_b.jpeg";
import slide_c from "../../assets/carousel-images/carousel_c.jpg";

const PromoCards = () => {
  return (
    <div className="flex justify-between gap-md mt-4 rounded">
      {/* The large fungus */}
      <div className="w-full max-w-[900px]">
        <img
          className="h-full w-full rounded"
          src={slide_a}
          alt="Large Promotion card"
        />
      </div>

      {/* Two small cards */}
      <div className="flex flex-col gap-md">
        <div>
          <img className="w-full h-[300px] rounded" src={slide_b} alt="" />
        </div>
        <div>
          <img className="w-full h-[300px] rounded" src={slide_c} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PromoCards;
