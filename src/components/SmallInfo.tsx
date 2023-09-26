import { sunType, unixToNowHours, WeatherData } from "../utils/helpers";

type SmallInfo = {
  cardType: "sunrise" | "sunset";
  mainData: WeatherData | null;
};

export const SmallInfo = ({ cardType, mainData }: SmallInfo) => {
  const sunTypeValue =
    cardType == "sunrise" ? mainData?.sys?.sunrise : mainData?.sys?.sunset;
  return (
    <div className="w-full bg-slate-300 rounded-lg  grid place-items-center relative dark:bg-slate-900">
      {sunType(cardType)}
      <h1 className="text-5xl font-bold">
        {mainData === null ? "--:--" : unixToNowHours(sunTypeValue)}
      </h1>
    </div>
  );
};
