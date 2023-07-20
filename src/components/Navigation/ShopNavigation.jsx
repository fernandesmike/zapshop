import React from "react";
import { Link } from "react-router-dom";

// Assets
import RightConf from "../../assets/confetti-right.png";
import LeftConf from "../../assets/confetti-left.png";

const ShopNavigation = () => {
  return (
    <div className="flex gap-8 body">
      {/* Promotional navigations */}
      <div className="promo-nav border-gray-400 border-r-2">
        <ul className="flex gap-8">
          <Link to="/deals">
            <li>Today's deals</li>
          </Link>
          <Link to="/specialdeals">
            <li className=" relative text-brand-accent">
              <img
                src={LeftConf}
                className="absolute left-[-18px] bottom-[-24px]"
              />
              <img
                src={RightConf}
                className="absolute right-[-20px] top-[-23px]"
              />
              Mother's day specials
            </li>
          </Link>
          <Link to="/bestsellers">
            <li className="pr-8">Best sellers</li>
          </Link>
        </ul>
      </div>

      {/* Category navigations */}
      <div className="category-nav">
        <ul className="flex gap-8">
          <Link to="/foryou">
            <li>For you</li>
          </Link>
          <Link to="/clothing">
            <li>Clothes</li>
          </Link>
          <Link to="/shoes">
            <li>Shoes</li>
          </Link>
          <Link to="/furnitures">
            <li>Furnitures</li>
          </Link>
          <Link to="/electronics">
            <li>Electronics</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ShopNavigation;
