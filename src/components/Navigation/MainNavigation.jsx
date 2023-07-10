import React from "react";
import { Outlet, Link } from "react-router-dom";

// Assets
import Brand from "../../assets/icons/navigation/brand.svg";
import Server from "../../assets/icons/navigation/ph-flag.svg";
import Search from "../../assets/icons/navigation/search.svg";
import Categories from "../../assets/icons/navigation/nav-menu.svg";
import Cart from "../../assets/icons/navigation/cart.svg";
import Wishlist from "../../assets/icons/navigation/wishlist.svg";
import Account from "../../assets/icons/navigation/account.svg";

const MainNavigation = () => {
  return (
    <div className="upper-nav flex items-center gap-11">
      {/* Brand and server */}
      <Link to="/">
        <div className="branding flex gap-2 pr-10">
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
          className="body text-secondary bg-transparent w-[100%] focus:outline-none focus:text-primary"
        />

        {/* Search categories */}
        <button className="flex gap-4 justify-center align-middle body text-white whitespace-nowrap bg-primary rounded px-8 py-5 my-auto">
          <img src={Categories} />
          <p>All categories</p>
        </button>
      </div>

      {/* Wishlist, Cart, and User account */}
      <div className="user-actions flex gap-8">
        <div className="wishlist opacity-40">
          <img src={Wishlist} />
        </div>
        <div className="cart relative">
          <img src={Cart} />
          <div className="indicator absolute right-[-5px] top-0 h-4 w-4 bg-brand-accent rounded-full text-center"></div>
        </div>
        <div className="account flex gap-2 items-center">
          <img src={Account} />
          <p className="body text-primary uppercase font-bold">Guest</p>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
