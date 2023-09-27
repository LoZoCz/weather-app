import { WeatherData } from "../utils/helpers";
import { sunType, unixToNowHours } from "../utils/funcs";

type SmallInfo = {
  cardType: "sunrise" | "sunset";
  mainData: WeatherData | null;
};

export const SmallInfo = ({ cardType, mainData }: SmallInfo) => {
  const sunTypeValue =
    cardType == "sunrise" ? mainData?.sys?.sunrise : mainData?.sys?.sunset;
  return (
    <div className="w-full bg-slate-300 rounded-lg grid place-items-center row-span-1 col-span-2 relative dark:bg-slate-900 2xl:row-span-1 2xl:col-span-1">
      {sunType(cardType)}
      <h1 className="text-5xl font-bold">
        {mainData === null ? "--:--" : unixToNowHours(sunTypeValue)}
      </h1>
    </div>
  );
};
