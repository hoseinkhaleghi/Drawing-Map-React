import { MapContainer, TileLayer } from "react-leaflet";
import Geoman from "./Geoman";
import Header from "./landingpage/header/Index";

const Map = () => {
  const position = [35.7219, 51.3347];
  const zoomLv = 13;

  return (
    <>
      <Header />
      <MapContainer center={position} zoom={zoomLv} scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          // attribution='&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={20}
        />
        <Geoman />
      </MapContainer>
    </>
  );
};

export default Map;
