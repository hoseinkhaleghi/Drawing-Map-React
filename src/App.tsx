import "./App.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage/Index";
import About from "./pages/About/Index";
import Map from "./pages/map/Index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
