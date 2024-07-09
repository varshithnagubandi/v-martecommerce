import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./stores/pages/LandingPage";
import MobilePage from "./stores/pages/MobilePage";
import AcPage from "./stores/pages/AcPage";

import ComputersPage from "./stores/pages/ComputersPage";
import FridgePage from "./stores/pages/FridgePage";
import FurniturePage from "./stores/pages/FurniturePage";
import KitchenPage from "./stores/pages/KitchenPage";
import MenPage from "./stores/pages/MenPage";

import WatchPage from "./stores/pages/WatchPage";
import WomenPage from "./stores/pages/WomenPage";
import MobileSingle from "./singles/MobileSingle";
import AcSingle from "./singles/AcSingle";

import ComputerSingle from "./singles/ComputerSingle";
import FridgeSingle from "./singles/FridgeSingle";
import FurnitureSingle from "./singles/FurnitureSingle";
import KitchenSingle from "./singles/KitchenSingle";
import MenSingle from "./singles/MenSingle";
import WatcheSingle from "./singles/WatcheSingle";
import WomanSingle from "./singles/WomanSingle";
import UserCart from "./stores/UserCart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobiles" element={<MobilePage />} />
        <Route path="/ac" element={<AcPage />} />

        <Route path="/computers" element={<ComputersPage />} />
        <Route path="/fridges" element={<FridgePage />} />
        <Route path="/furnitures" element={<FurniturePage />} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="/men" element={<MenPage />} />

        <Route path="/watch" element={<WatchPage />} />
        <Route path="/woman" element={<WomenPage />} />
        {/*DYNAMIC ROUTING*/}
        <Route path="/mobiles/:id" element={<MobileSingle />} />
        <Route path="/ac/:id" element={<AcSingle />} />

        <Route path="/computers/:id" element={<ComputerSingle />} />
        <Route path="/fridge/:id" element={<FridgeSingle />} />
        <Route path="/furniture/:id" element={<FurnitureSingle />} />
        <Route path="/kitchen/:id" element={<KitchenSingle />} />
        <Route path="/men/:id" element={<MenSingle />} />
        <Route path="/watch/:id" element={<WatcheSingle />} />
        <Route path="/woman/:id" element={<WomanSingle />} />
        <Route path="/cart" element={<UserCart />} />
      </Routes>
    </div>
  );
}

export default App;
