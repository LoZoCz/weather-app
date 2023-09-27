import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { WeatherData } from "../utils/helpers";

type SideInfoProps = {
  mainData: WeatherData | null;
};
export const SideInfo = ({ mainData }: SideInfoProps) => {
  return (
    <div className="w-full row-span-1 col-span-4 bg-slate-300 rounded-lg flex flex-row items-center justify-center gap-40 p-2 relative dark:bg-slate-900 2xl:col-span-2 2xl:row-span-2 xl:col-span-2 xl:row-span-3 xl:flex-col xl:gap-8 lg:gap-64">
      <FontAwesomeIcon
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 opacity-10"
        icon={faGauge}
      />
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl font-bold xl:text-7xl">
          {mainData === null
            ? "----"
            : mainData?.main?.grnd_level === undefined
            ? mainData?.main?.pressure
            : "----"}{" "}
          hPa
        </h1>
        <p className="text-2xl font-bold xl:text-4xl">Pressure (ground)</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-5xl font-bold xl:text-7xl">
          {mainData?.main?.sea_level === undefined
            ? "----"
            : mainData?.main?.sea_level}{" "}
          hPa
        </h1>
        <p className="text-2xl font-bold xl:text-4xl">Pressure (sea)</p>
      </div>
    </div>
  );
};
