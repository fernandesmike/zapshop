import React from "react";
import { Link, Outlet } from "react-router-dom";
import FixedUpperBanner from "../FixedUpperBanner/FixedUpperBanner";

// Styling
import "../../styles/typography.css";

// Assets

import Brand from "../../assets/icons/navigation/brand.svg";
import Server from "../../assets/icons/navigation/ph-flag.svg";
import Search from "../../assets/icons/navigation/search.svg";

const NavLayout = () => {
  return (
    <>
      <FixedUpperBanner />

      <nav>
        <div className="upper-nav">
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
          <div className="search-area">
            <div className="searchfield flex gap-4 p-6 border-r-4 bg-[#E6E8EB]">
              <img src={Search} alt="Zapshop logo" />
              <input
                type="text"
                placeholder="Find and discover clothes, gadgets, or even furnitures"
                className="body text-secondary"
              />
              <div className="search-categories"></div>
            </div>
          </div>

          {/* Wishlist, Cart, and User account */}
          <div className="user-actions"></div>
        </div>

        <div className="lower-nav">
          <div>
            <ul>
              <Link to="/clothing">
                <li>Clothing</li>
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
      </nav>

      <main className="px-4">
        I am
        <Outlet />
      </main>
    </>
  );
};

export default NavLayout;
