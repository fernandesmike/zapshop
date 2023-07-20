import React from "react";
import { Outlet } from "react-router-dom";
import FixedUpperBanner from "../FixedUpperBanner/FixedUpperBanner";
import Navigation from "../Navigation/MainNavigation";
import ShopNavigation from "../Navigation/ShopNavigation";
import Footer from "../Footer/Footer";

// Styling
import "../../styles/typography.css";

const NavLayout = () => {
  return (
    <>
      <FixedUpperBanner />
      {/* Max width prevents the container from stretching when zoomed */}
      <main className="px-4 max-w-[1920px] min-h-[70vh] mx-auto">
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

      <footer className="mt-auto">
        <Footer />
      </footer>
    </>
  );
};

export default NavLayout;
