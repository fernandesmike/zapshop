import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import Furnitures from "./pages/Furnitures";
import Clothing from "./pages/Clothing";
import Shoes from "./pages/Shoes";
import Electronics from "./pages/Electronics";

function App() {
  return (
    <>
      <nav>
        <div>
          <Link to="/">zapshop</Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/clothing">Clothing</Link>
            </li>
            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/furnitures">Furnitures</Link>
            </li>
            <li>
              <Link to="/electronics">Electronics</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/furnitures" element={<Furnitures />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </>
  );
}

export default App;

//TODO:
// Update the logo
