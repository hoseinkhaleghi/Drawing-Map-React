import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { useTranslation } from "react-i18next";
interface pm {
  getShape: () => void;
  enable: () => void;
}
const Geoman = () => {
  const context = useLeafletContext();
  const { t, i18n } = useTranslation("global");
  i18n.changeLanguage;

  useEffect(() => {
    const leafletContainer = context.layerContainer || context.map;

    leafletContainer.pm.addControls({
      drawMarker: false,
    });

    leafletContainer.pm.setGlobalOptions({ pmIgnore: false });

    leafletContainer.on("pm:create", (e: { layer: { pm: pm } }) => {
      if (e.layer && e.layer.pm) {
        const shape = e;
        console.log(e);
        shape.layer.pm.enable();
        console.log(`object created: ${shape.layer.pm.getShape()}`);
        leafletContainer.pm
          .getGeomanLayers(true)
          .bindPopup("i am whole")
          .openPopup();
        leafletContainer.pm
          .getGeomanLayers()
          .map(
            (layer: { bindPopup: (arg0: string) => unknown }, index: number) =>
              layer.bindPopup(`${t("figure.messsage")} ${index}`)
          );
      }
    });
    return () => {
      leafletContainer.pm.removeControls();
      leafletContainer.pm.setGlobalOptions({ pmIgnore: true });
    };
  }, [context, t]);

  return null;
};

export default Geoman;
