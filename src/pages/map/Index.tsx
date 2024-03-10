import { MapContainer, TileLayer } from "react-leaflet";
import Geoman from "../../components/Geoman";

const Map = () => {
  const zoomLv = 13;

  return (
    <>
      <MapContainer
        center={[35.7219, 51.3347]}
        zoom={zoomLv}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          maxZoom={20}
        />
        <Geoman />
      </MapContainer>
    </>
  );
};

export default Map;
