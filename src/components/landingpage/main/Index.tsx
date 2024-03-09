import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../../globalcontext/GlobalContext";

function Main() {
  const { t, i18n } = useTranslation("global");
  const { isDarkMode } = useDarkMode();
  return (
    <div
      dir={i18n.language == "en" ? "ltr" : "rtl"}
      className={isDarkMode ? "bg-blue-950 text-white" : ""}
    >
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1
            className={
              isDarkMode
                ? "mt-10 text-4xl font-bold tracking-tight   sm:text-6xl"
                : "mt-10 text-4xl font-bold tracking-tight  sm:text-6xl"
            }
          >
            Revolutionize GIS Data Management with Leaflet-Geoman
          </h1>
          <p className="mt-6 text-lg leading-8 ">{t("Directly.messsage")}</p>
          <div className="flex lg:flex-1">
            <Link to="/map">
              <button
                className={
                  isDarkMode
                    ? " bg-white text-black rounded-md w-52 h-14 mt-4 "
                    : "bg-blue-700 rounded-md text-white mt-4 w-52 h-14 "
                }
              >
                <span className="text-2xl ">{t("Start.messsage")}</span>
              </button>
            </Link>
          </div>
        </div>
        <div className=" mt-16 flex max-w-2xl sm:mt-24  lg:max-w-2xl lg:flex-none ">
          <div className="max-w-2xl  sm:max-w-xl lg:max-w-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="https://geoman-static.onrender.com/assets/videos/GeneralDrawingEditing.mp4"
              className=" rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            ></video>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Main;
