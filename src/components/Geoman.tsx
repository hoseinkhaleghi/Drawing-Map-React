import { useEffect } from "react";
import { useLeafletContext } from "@react-leaflet/core";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { useTranslation } from "react-i18next";

const Geoman = () => {
  const context = useLeafletContext();
  const {t, i18n} = useTranslation("global");
  i18n.changeLanguage;

  useEffect(() => {
    const leafletContainer = context.layerContainer || context.map;

    leafletContainer.pm.addControls({
      drawMarker: false
    });

    leafletContainer.pm.setGlobalOptions({ pmIgnore: false });

    leafletContainer.on("pm:create", (e) => {
      if (e.layer && e.layer.pm) {
        const shape = e;
        console.log(e);

        // enable editing of circle
        shape.layer.pm.enable();

        console.log(`object created: ${shape.layer.pm.getShape()}`);
        // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
        leafletContainer.pm
          .getGeomanLayers(true)
          .bindPopup("i am whole")
          .openPopup();
        leafletContainer.pm
          .getGeomanLayers()
          .map((layer  , index : number) => layer.bindPopup(`${t("figure.messsage")} ${index}`));
        // shape.layer.on("pm:edit", (e) => {
          // const event = e;
          // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
        // });
      }
    });

    //leafletContainer.on("pm:remove", (e) => {
      //console.log("object removed");
      // console.log(leafletContainer.pm.getGeomanLayers(true).toGeoJSON());
    //});

    return () => {
      leafletContainer.pm.removeControls();
      leafletContainer.pm.setGlobalOptions({ pmIgnore: true });
    };
  }, [context, t]);

  return null;
};

export default Geoman;
