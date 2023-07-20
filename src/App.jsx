import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Furnitures from "./pages/Furnitures/Furnitures";
import Clothing from "./pages/Clothing/Clothing";
import Shoes from "./pages/Shoes/Shoes";
import Electronics from "./pages/Electronics/Electronics";
import Layout from "./components/NavLayout/NavLayout";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import DailyDeals from "./pages/DailyDeals/DailyDeals";
import SpecialDeals from "./pages/Specials/SpecialDeals";
import BestSellers from "./pages/BestSellers/BestSellers";
import ExclusiveDeals from "./pages/ExclusiveDeals/ExclusiveDeals";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/furnitures" element={<Furnitures />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/deals" element={<DailyDeals />} />
          <Route path="/specialdeals" element={<SpecialDeals />} />
          <Route path="/bestsellers" element={<BestSellers />} />
          <Route path="/foryou" element={<ExclusiveDeals />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
