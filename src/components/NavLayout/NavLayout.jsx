import React from "react";
import { Link, Outlet } from "react-router-dom";
import MainNav from "../Navigation/MainNav";
import FixedUpperBanner from "../FixedUpperBanner/FixedUpperBanner";

const NavLayout = () => {
  return (
    <>
      <nav>
        <FixedUpperBanner />
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

        <MainNav />
      </nav>

      <main>
        I am
        <Outlet />
      </main>
    </>
  );
};

export default NavLayout;
