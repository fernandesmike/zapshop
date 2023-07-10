import React from "react";
import { Link, Outlet } from "react-router-dom";
import FixedUpperBanner from "../FixedUpperBanner/FixedUpperBanner";
import Navigation from "../Navigation/MainNavigation";
import ShopNavigation from "../Navigation/ShopNavigation";

// Styling
import "../../styles/typography.css";

const NavLayout = () => {
  return (
    <>
      <FixedUpperBanner />

      <main className="px-4">
        <nav>
          <div className="upper-nav mt-4">
            <Navigation />
          </div>
          <div className="lower-nav py-8">
            <ShopNavigation />
          </div>
        </nav>
        I am
        <Outlet />
      </main>
    </>
  );
};

export default NavLayout;
