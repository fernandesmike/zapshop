import React from "react";

// Assets
import BackgroundPattern from "../../assets/backgrounds/bg-pattern.png";
import ConfettiEmoji from "../../assets/icons/confetti-emoji.svg";

const SaleTimer = () => {
  return (
    <div className="flex justify-between items-center px-10 py-8  bg-brand-accent w-full rounded relative">
      {/* Sale title */}
      <img className="absolute top-0 left-0" src={BackgroundPattern} />
      <div className="flex gap-lg items-center">
        <img className="bg-white p-2 rounded " src={ConfettiEmoji} />
        <p className="title font-bold text-white">On sale | Today only!</p>
      </div>

      {/* Sale timer */}
      <div className="flex justify-between gap-md items-center body text-white font-bold">
        <div className="text-center p-4">
          <p className="title font-bold pb-4 text-white">07</p>
          <p className="opacity-80">HOURS</p>
        </div>
        <p>:</p>
        <div className="text-center p-4">
          <p className="title font-bold pb-4 text-white">24</p>
          <p className="opacity-80">MINUTES</p>
        </div>
        <p>&#58;</p>
        <div className="text-center p-4">
          <p className="title font-bold pb-4 text-white">08</p>
          <p className="opacity-80">SECONDS</p>
        </div>
      </div>

      {/* Call to actions */}
      <div className="z-10">
        <button className="flex justify-center body font-bold items-center min-w-[230px] max-w-[230px] py-4 bg-primary text-white rounded ">
          Shop now!
        </button>
      </div>
    </div>
  );
};

export default SaleTimer;
