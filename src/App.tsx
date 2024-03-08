import "./App.css";
import "leaflet/dist/leaflet.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./components/Map";
import LandingPage from "./pages/landingpage/Index";
// import {  useState } from "react";
// export const ThemeContext = createContext("light");

export default function App() {
  // const [darkmode, setDarkMode] = useState("light");
  return (
    // <ThemeContext.Provider value={{ darkmode, setDarkMode }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    // </ThemeContext.Provider>
  );
}
