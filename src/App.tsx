import {
  Logo,
  MainInfo,
  SearchBar,
  SideInfo,
  SmallInfo,
  BottomInfo,
} from "./components/export";
import "./styles/index.scss";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import { WeatherData } from "./utils/helpers";
import { darkThemeUser } from "./utils/funcs";
import { useEffect, useState } from "react";

function App() {
  const [mainData, setMainData] = useState<WeatherData | null>(null);
  const [mainValue, setMainValue] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    darkThemeUser();
  }, []);

  useEffect(() => {
    mainValue &&
      fetchFromAPI(mainValue).then((data) => {
        setMainData(data);
      });
  }, [mainValue]);

  return (
    <main className="order-1 w-full h-full grid p-6 gap-6 main-cont grid-cols-4 grid-rows-6 2xl:grid-cols-8 2xl:grid-rows-4 xl:grid-cols-6 md:grid-rows-5">
      {windowWidth > 1536 && <Logo />}
      <SearchBar setMainValue={setMainValue} windowWidth={windowWidth} />
      <MainInfo mainData={mainData} windowWidth={windowWidth} />
      {windowWidth > 768 && <SideInfo mainData={mainData} />}
      {windowWidth > 790 && (
        <SmallInfo cardType="sunrise" mainData={mainData} />
      )}
      {windowWidth > 790 && <SmallInfo cardType="sunset" mainData={mainData} />}
      <BottomInfo cardType="cloudiness" mainData={mainData} />
      <BottomInfo cardType="wind" mainData={mainData} />
      <BottomInfo cardType="humidity" mainData={mainData} />
      <BottomInfo cardType="visibility" mainData={mainData} />
    </main>
  );
}

export default App;

// ANIMACJA NA INPUCIE, ROZDZIEL WSZYSTKIE ELEMENTY NA KOMPONENTY
