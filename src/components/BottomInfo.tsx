import {
  bottomCardType,
  upperFirstLetter,
  convertMStoKMH,
  WeatherData,
} from "../utils/helpers";

type BottomInfo = {
  cardType: "cloudiness" | "wind" | "humidity" | "visibility";
  mainData: WeatherData | null;
};

export const BottomInfo = ({ cardType, mainData }: BottomInfo) => {
  const typeOfBottomData = (name: string) => {
    if (name == "cloudiness") {
      return mainData === null ? "----" : `${mainData?.clouds?.all}%`;
    } else if (name == "wind") {
      const windSpeed = mainData?.wind?.speed;
      return windSpeed === null ? "----" : `${convertMStoKMH(windSpeed)}km/h`;
    } else if (name == "humidity") {
      return mainData === null ? "----" : `${mainData?.main?.humidity}%`;
    } else if (name == "visibility") {
      return mainData === null
        ? "----"
        : `${convertMStoKMH(mainData?.visibility)}km`;
    }
  };

  return (
    <div className="w-full col-span-2 bg-slate-300 rounded-lg flex flex-col gap-2 justify-center items-center relative dark:bg-slate-900">
      {bottomCardType(cardType)}
      <h1 className="text-8xl font-bold">{typeOfBottomData(cardType)}</h1>
      <p className="text-3xl font-bold">{upperFirstLetter(cardType)}</p>
    </div>
  );
};
