import React from "react";

// Components
import DualRow from "../../components/ProductListing/DualRow";

// Assets
import SpecialDealBanner from "../../assets/carousel-images/special_event.png";

const SpecialDeals = () => {
  return (
    <div className="flex flex-col gap-lg">
      {/* Deal banner container */}
      <div>
        <img
          className="w-full max-h-[325px] min-h-[325px] rounded"
          src={SpecialDealBanner}
          alt=""
        />
      </div>

      {/* Product cards container */}
      <DualRow showTitle={false} showButton={false} />
    </div>
  );
};

export default SpecialDeals;

// TODO:
// 1. Include breadcrumbs here
