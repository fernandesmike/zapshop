import React from "react";

import DualRow from "../../components/ProductListing/DualRow";

const BestSellers = () => {
  return (
    <div className="flex flex-col gap-xl py-10">
      {/* Deal banner container */}
      <div>
        <div className="flex flex-col items-center gap-md">
          <h1 className="heading-a font-bold">Best sellers</h1>
          <p className="body text-secondary">
            Find out why these items are sold fast and quick!
          </p>
        </div>
      </div>

      <DualRow showTitle={false} showButton={false} />
    </div>
  );
};

export default BestSellers;
