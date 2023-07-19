import React from "react";
import { Link } from "react-router-dom";

// Styling
import "../../styles/typography.css";

// Assets (SVG)
import Facebook from "../../assets/icons/social-media/fb.svg";
import Twitter from "../../assets/icons/social-media/twitter.svg";
import Tiktok from "../../assets/icons/social-media/tiktok.svg";
import Gift from "../../assets/icons/gift-01.svg";
import Language from "../../assets/icons/lang.svg";
import Telephone from "../../assets/icons/phone-call-01.svg";

const FixedUpperBanner = () => {
  return (
    // Outer div keeps the container touch both ends of the vw width
    <div className="bg-brand-accent">
      <div className="py-4 px-4 flex justify-between text-white max-w-[1920px] mx-auto">
        {/* Left */}
        <div className="social-media flex place-content-start gap-lg w-[256px]">
          <img src={Facebook} />
          <img src={Tiktok} />
          <img src={Twitter} />
        </div>

        {/* Center */}
        <div className="center flex gap-2 items-center">
          <img src={Gift} />
          <p className="body">
            Get up to <strong>60% discounts</strong> on your first 30 orders!
            <strong className="link ml-1">
              <Link to={"/"}>Shop now</Link>
            </strong>
          </p>
        </div>

        {/* Right */}
        <div className="lang-and-phone flex gap-md place-content-end w-[256px]">
          <div className="phone flex gap-2 items-center">
            <img src={Telephone} />
            <p>(212) 456 - 7890</p>
          </div>

          <div className="language flex gap-2 items-center">
            <img src={Language} />
            <p>ENG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedUpperBanner;
