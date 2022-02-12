import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Favourites from "./pages/favourites";
import Add from "./pages/add"

import MainNav from "./components/layout/MainNav";
import FooterBottom from "./components/layout/FooterBottom";

function App() {
  return (
    <div>
      <MainNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favs" element={<Favourites />} />
        <Route path="add" element={<Add />} />
      </Routes>
      <FooterBottom/>
    </div>
  );
}

export default App;
