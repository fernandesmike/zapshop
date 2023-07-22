import React from "react";
import { Outlet } from "react-router-dom";

// Components
import FixedUpperBanner from "../FixedUpperBanner/FixedUpperBanner";
import Navigation from "../Navigation/MainNavigation";
import Footer from "../Footer/Footer";

const ClothingLayout = () => {
  return (
    <>
      <FixedUpperBanner />
      {/* Max width prevents the container from stretching when zoomed */}
      <main className="px-4 max-w-[1920px] min-h-[70vh] mx-auto">
        <nav>
          <div className="upper-nav mt-4 pb-9">
            <Navigation />
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

export default ClothingLayout;
