import React from "react";
import { Link, Outlet } from "react-router-dom";
import FixedUpperBanner from "../FixedUpperBanner/FixedUpperBanner";
import "../../styles/typography.css";

const NavLayout = () => {
  return (
    <>
      <FixedUpperBanner />

      <nav>
        <div className="upper-nav"></div>
          
        <div className="lower-nav">
          <div>
            <Link to="/">zapshop</Link>
          </div>
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
