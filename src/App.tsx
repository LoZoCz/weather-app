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
import { darkThemeUser, WeatherData } from "./utils/helpers";
import { useEffect, useState } from "react";

function App() {
  const [mainData, setMainData] = useState<WeatherData | null>(null);
  const [mainValue, setMainValue] = useState<string>("");

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
    <main className="w-full h-full grid grid-cols-8 grid-rows-4 p-6 gap-6">
      <Logo />
      <SearchBar setMainValue={setMainValue} />
      <MainInfo mainData={mainData} />
      <SideInfo mainData={mainData} />
      <SmallInfo cardType="sunrise" mainData={mainData} />
      <SmallInfo cardType="sunset" mainData={mainData} />
      <BottomInfo cardType="cloudiness" mainData={mainData} />
      <BottomInfo cardType="wind" mainData={mainData} />
      <BottomInfo cardType="humidity" mainData={mainData} />
      <BottomInfo cardType="visibility" mainData={mainData} />
    </main>
  );
}

export default App;
