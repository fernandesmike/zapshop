import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <div>
          <Link to="/">zapshop</Link>
        </div>
        <div>
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
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
      </nav>

      <main>
        I am at
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
