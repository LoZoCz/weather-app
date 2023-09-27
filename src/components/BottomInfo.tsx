import { WeatherData } from "../utils/helpers";
import { upperFirstLetter, bottomCardType } from "../utils/funcs";

type BottomInfo = {
  cardType: "cloudiness" | "wind" | "humidity" | "visibility";
  mainData: WeatherData | null;
};

export const BottomInfo = ({ cardType, mainData }: BottomInfo) => {
  const typeOfBottomData = (name: string) => {
    if (name == "cloudiness") {
      return mainData === null ? "----" : `${mainData?.clouds?.all}%`;
    } else if (name == "wind") {
      return mainData === null ? "----" : `${mainData?.wind?.speed}m/s`;
    } else if (name == "humidity") {
      return mainData === null ? "----" : `${mainData?.main?.humidity}%`;
    } else if (name == "visibility") {
      return mainData === null
        ? "----"
        : `${Math.round(mainData?.visibility / 1000)}km`;
    }
  };

  return (
    <div className="w-full col-span-2 bg-slate-300 rounded-lg flex flex-col gap-2 justify-center items-center relative dark:bg-slate-900 xl:col-span-2 md:col-span-1">
      {bottomCardType(cardType)}
      <h1 className="text-3xl font-bold xl:text-8xl sm:text-5xl">
        {typeOfBottomData(cardType)}
      </h1>
      <p className="text-2xl font-bold sm:text-3xl">
        {upperFirstLetter(cardType)}
      </p>
    </div>
  );
};
