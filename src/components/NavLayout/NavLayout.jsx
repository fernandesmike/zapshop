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
      {/* Max width prevents the container from stretching when zoomed */}
      <main className="px-4 max-w-[1920px] mx-auto">
        <nav>
          <div className="upper-nav mt-4">
            <Navigation />
          </div>
          <div className="lower-nav py-9">
            <ShopNavigation />
          </div>
        </nav>
        <Outlet />
      </main>
    </>
  );
};

export default NavLayout;
