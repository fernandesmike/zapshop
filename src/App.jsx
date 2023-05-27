import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import Furnitures from "./pages/Furnitures";
import Clothing from "./pages/Clothing";
import Shoes from "./pages/Shoes";
import Electronics from "./pages/Electronics";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/furnitures" element={<Furnitures />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/electronics" element={<Electronics />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

//TODO:
// Update the logo
