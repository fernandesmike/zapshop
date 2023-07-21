import React from "react";

// Components
import DualRow from "../../components/ProductListing/DualRow";

const ExclusiveDeals = () => {
  return (
    <div className="flex flex-col gap-xl py-10">
      {/* Deal banner container */}
      <div>
        <div className="flex flex-col items-center gap-md">
          <h1 className="heading-a font-bold">Deals for you</h1>
          <p className="body text-secondary">
            You might like these amazing deals we've only just for you
          </p>
        </div>
      </div>

      <DualRow showTitle={false} showButton={false} />
    </div>
  );
};

export default ExclusiveDeals;
