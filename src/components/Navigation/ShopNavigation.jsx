import React from "react";
import { Link } from "react-router-dom";

// Assets

const ShopNavigation = () => {
  return (
    <div className="flex gap-8 body font-semibold">
      {/* Promotional navigations */}
      <div className="promo-nav border-secondary border-r-2">
        <ul className="flex gap-8">
          <Link to="/clothing">
            <li>Today's deals</li>
          </Link>
          <Link to="/clothing">
            <li>Mother's day specials</li>
          </Link>
          <Link to="/clothing">
            <li className="pr-8">Best sellers</li>
          </Link>
        </ul>
      </div>

      {/* Category navigations */}
      <div className="category-nav">
        <ul className="flex gap-8">
          <Link to="/clothing">
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
