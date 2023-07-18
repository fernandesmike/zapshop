import React from "react";

// Styling
import "../../styles/typography.css";

const Card = ({ title, productCount }) => {
  return (
    <div className="flex items-center bg-green-500 w-full rounded h-[200px]">
      <div className="flex flex-col items-start gap-sm pl-8">
        <h3 className="heading-b font-bold">{title}</h3>
        <p className="body font-bold">{productCount}k products</p>
      </div>
    </div>
  );
};

export default Card;
