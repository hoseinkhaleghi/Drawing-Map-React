import "./App.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./components/Map";
import LandingPage from "./pages/landingpage/Index";
import About from "./pages/About/Index";

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
