import React from "react";

// Components
import Tags from "../../components/Tags/Tags";
import DualRow from "../../components/ProductListing/DualRow";

const DailyDeals = () => {
  // List of all active tags to be inserted
  const activeTags = [
    "Shoes",
    "Electronics",
    "2nd hand",
    "Lightning shoes",
    "Mc Queen",
  ];

  return (
    <div className="flex flex-col gap-lg py-10">
      {/* Title and tag container */}
      <div className="flex flex-col items-center gap-lg">
        <h1 className="heading-a font-bold">Today's deals</h1>

        {/* Tags */}
        <div className="flex gap-md">
          <Tags txtContent={activeTags[0]} />
          <Tags txtContent={activeTags[1]} />
          <Tags txtContent={activeTags[2]} />
          <Tags txtContent={activeTags[3]} />
          <Tags txtContent={activeTags[4]} />
        </div>
      </div>

      {/* Product cards container */}
      <DualRow listTitle={"Today's deals"} showTitle={false} />

      <div className="flex justify-center ">
        <p className="body text-secondary">
          Come back tomorrow for more exciting deals!
        </p>
      </div>
    </div>
  );
};

export default DailyDeals;
