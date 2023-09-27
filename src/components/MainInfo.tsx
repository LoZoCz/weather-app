import {
  kelIntoCelc,
  upperFirstLetter,
  unixToNowHours,
  findWeatherIconByName,
} from "../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureArrowUp,
  faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { WeatherData } from "../utils/helpers";

type MainInfoProps = {
  mainData: WeatherData | null;
};
export const MainInfo = ({ mainData }: MainInfoProps) => {
  return (
    <div className="w-full row-span-2 col-span-5 bg-slate-300 rounded-lg p-5 flex flex-col relative dark:bg-slate-900">
      <h1 className="text-9xl font-bold w-fit">
        {mainData === null ? "0" : kelIntoCelc(mainData?.main?.temp)}°C
      </h1>
      <p className="text-4xl font-bold w-fit">
        {mainData === null ? "----" : `${mainData?.sys?.country},`}{" "}
        {mainData?.name}
      </p>
      <p className="text-2xl font-semibold mt-auto w-fit">
        Weather:{" "}
        {mainData === null
          ? "----"
          : upperFirstLetter(mainData?.weather[0]?.description)}
      </p>
      <p className="text-4xl font-bold w-fit absolute top-5 right-5">
        {mainData === null ? "--:--" : unixToNowHours(mainData?.dt)}
      </p>
      {mainData === null
        ? ""
        : findWeatherIconByName(mainData?.weather[0]?.icon)}
      <div className="absolute bottom-5 right-5">
        <div className="flex gap-4">
          <FontAwesomeIcon className="text-4xl" icon={faTemperatureArrowUp} />
          <p className="text-4xl font-bold w-fit">
            {mainData === null ? "----" : kelIntoCelc(mainData?.main?.temp_max)}
            °C
          </p>
        </div>
        <div className="flex gap-4">
          <FontAwesomeIcon className="text-4xl" icon={faTemperatureArrowDown} />
          <p className="text-4xl font-bold w-fit">
            {mainData === null ? "----" : kelIntoCelc(mainData?.main?.temp_min)}
            °C
          </p>
        </div>
      </div>
    </div>
  );
};
