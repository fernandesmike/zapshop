import React from "react";

// Assets
import BackgroundPattern from "../../assets/backgrounds/bg-pattern.png";

const SaleTimer = () => {
  return (
    <div className="flex justify-between items-center px-10 py-8  bg-brand-accent w-full rounded">
      {/* Sale title */}
      <div>some title</div>

      {/* Sale timer */}
      <div className="flex justify-between items-center body text-white font-bold">
        <div className="text-center p-4">
          <p className="title font-bold pb-2 text-white">07</p>
          <p className="opacity-80">HOURS</p>
        </div>
        <p>:</p>
        <div className="text-center p-4">
          <p className="title font-bold pb-2 text-white">24</p>
          <p className="opacity-80">MINUTES</p>
        </div>
        <p>&#58;</p>
        <div className="text-center p-4">
          <p className="title font-bold pb-2 text-white">08</p>
          <p className="opacity-80">SECONDS</p>
        </div>
      </div>

      {/* Call to actions */}
      <div>
        
      </div>
    </div>
  );
};

export default SaleTimer;
