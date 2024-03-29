import React from "react";

// Assets
import RightArrow from "../../assets/icons/arrow-right.svg";

const ButtonRightIcon = ({ buttonTxt, showIcon }) => {
  return (
    <button className="flex justify-center body font-bold gap-sm items-center min-w-[230px] max-w-[230px] py-4 bg-brand-accent text-white rounded hover:bg-brand-dark">
      {buttonTxt}
      {showIcon && <img src={RightArrow} alt="" />}
    </button>
  );
};

export default ButtonRightIcon;
