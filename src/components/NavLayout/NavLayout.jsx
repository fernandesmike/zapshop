import React from "react";
import { Link, Outlet } from "react-router-dom";
import FixedUpperBanner from "../FixedUpperBanner/FixedUpperBanner";
import Navigation from "../Navigation/MainNavigation";

// Styling
import "../../styles/typography.css";

const NavLayout = () => {
  return (
    <>
      <FixedUpperBanner />
      <nav>
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
        <Navigation />
        I am
        <Outlet />
      </main>
    </>
  );
};

export default NavLayout;
