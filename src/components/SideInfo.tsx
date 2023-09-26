import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { WeatherData } from "../utils/helpers";

type SideInfoProps = {
  mainData: WeatherData | null;
};
export const SideInfo = ({ mainData }: SideInfoProps) => {
  return (
    <div className="w-full row-span-2 col-span-2 bg-slate-300 rounded-lg grid place-items-center p-2 relative dark:bg-slate-900">
      <FontAwesomeIcon
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 opacity-10"
        icon={faGauge}
      />
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-7xl font-bold">
          {mainData === null
            ? "----"
            : mainData?.main?.grnd_level === undefined
            ? mainData?.main?.pressure
            : "----"}{" "}
          hPa
        </h1>
        <p className="text-4xl font-bold">Pressure (ground)</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-7xl font-bold">
          {mainData?.main?.sea_level === undefined
            ? "----"
            : mainData?.main?.sea_level}{" "}
          hPa
        </h1>
        <p className="text-4xl font-bold">Pressure (sea)</p>
      </div>
    </div>
  );
};
