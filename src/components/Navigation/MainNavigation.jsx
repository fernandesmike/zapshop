import React from "react";
import { Outlet, Link } from "react-router-dom";

// Assets
import Brand from "../../assets/icons/navigation/brand.svg";
import Server from "../../assets/icons/navigation/ph-flag.svg";
import Search from "../../assets/icons/navigation/search.svg";
import Categories from "../../assets/icons/navigation/nav-menu.svg";

const MainNavigation = () => {
  return (
    <div className="upper-nav flex items-center gap-10">
      {/* Brand and server */}
      <Link to="/">
        <div className="branding flex gap-2">
          <img src={Brand} alt="Zapshop logo" />
          <div className="server flex gap-1 items-center">
            <img src={Server} alt="The server you are currently in" />
            <p className="tertiary text-secondary">PH</p>
          </div>
        </div>
      </Link>

      {/* Large search field */}
      <div className="search-area rounded flex gap-4 pl-6 bg-[#E6E8EB] grow">
        <img src={Search} alt="Zapshop logo" />
        <input
          type="text"
          placeholder="Find and discover clothes, gadgets, or even furnitures"
          className="body text-secondary bg-transparent py-6 w-[100%] focus:outline-none focus:text-primary"
        />
        <div className="search-categories bg-primary rounded px-6">
          <button className="flex gap-2 justify-center align-middle body text-white whitespace-nowrap">
            <img src={Categories} />
            <p>All categories</p>
          </button>
        </div>
      </div>

      {/* Wishlist, Cart, and User account */}
      <div className="user-actions"> ahaha</div>
    </div>
  );
};

export default MainNavigation;
