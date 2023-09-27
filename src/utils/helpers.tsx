import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudBolt,
  faCloudShowersHeavy,
  faCloudSunRain,
  faCloudMoonRain,
  faSnowflake,
  faSmog,
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faAngleUp,
  faAngleDown,
  faWind,
  faDroplet,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export const mockWeaterData = {
  coord: {
    lon: 18.9664,
    lat: 50.1372,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01n",
    },
  ],
  base: "stations",
  main: {
    temp: 290.71,
    feels_like: 290.48,
    temp_min: 289.39,
    temp_max: 291.64,
    pressure: 1024,
    humidity: 75,
    sea_level: 1024,
    grnd_level: 993,
  },
  visibility: 10000,
  wind: {
    speed: 1.8,
    deg: 119,
    gust: 3.22,
  },
  clouds: {
    all: 0,
  },
  dt: 1695759496,
  sys: {
    type: 2,
    id: 265494,
    country: "PL",
    sunrise: 1695702942,
    sunset: 1695746132,
  },
  timezone: 7200,
  id: 3082914,
  name: "Tychy",
  cod: 200,
};

export type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string | null;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export const startLocations = [
  "Warszawa",
  "Kraków",
  "Gdańsk",
  "Poznań",
  "Wrocław",
  "Szczecin",
  "Katowice",
];

const weatherStyles =
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 opacity-10";

export const weatherIcons = [
  {
    name: "11d",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faCloudBolt} />,
  },
  {
    name: "09d",
    icon: (
      <FontAwesomeIcon className={weatherStyles} icon={faCloudShowersHeavy} />
    ),
  },
  {
    name: "10d",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faCloudSunRain} />,
  },
  {
    name: "10n",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faCloudMoonRain} />,
  },
  {
    name: "13d",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faSnowflake} />,
  },
  {
    name: "50d",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faSmog} />,
  },
  {
    name: "50n",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faSmog} />,
  },
  {
    name: "01d",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faSun} />,
  },
  {
    name: "01n",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faMoon} />,
  },
  {
    name: "02d",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faCloudSun} />,
  },
  {
    name: "02n",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faCloudMoon} />,
  },
  {
    name: "03d",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faCloud} />,
  },
  {
    name: "03n",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faCloud} />,
  },
  {
    name: "04d",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faCloud} />,
  },
  {
    name: "04n",
    icon: <FontAwesomeIcon className={weatherStyles} icon={faCloud} />,
  },
];

export const sunCardType = [
  {
    name: "sunrise",
    icon: (
      <>
        <FontAwesomeIcon
          className="absolute bottom-2/4 left-1/2 -translate-x-1/2 h-3/5 opacity-10"
          icon={faAngleUp}
        />
        <FontAwesomeIcon
          className="absolute top-1/3 left-1/2 -translate-x-1/2 h-3/5 opacity-10"
          icon={faSun}
        />
      </>
    ),
  },
  {
    name: "sunset",
    icon: (
      <>
        <FontAwesomeIcon
          className="absolute bottom-1/3 left-1/2 -translate-x-1/2 h-3/5 opacity-10"
          icon={faSun}
        />
        <FontAwesomeIcon
          className="absolute top-1/2 left-1/2 -translate-x-1/2 h-3/5 opacity-10"
          icon={faAngleDown}
        />
      </>
    ),
  },
];

const bottomStyles =
  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 opacity-10";

export const bottomIcons = [
  {
    name: "cloudiness",
    icon: <FontAwesomeIcon className={bottomStyles} icon={faCloud} />,
  },
  {
    name: "wind",
    icon: <FontAwesomeIcon className={bottomStyles} icon={faWind} />,
  },
  {
    name: "humidity",
    icon: <FontAwesomeIcon className={bottomStyles} icon={faDroplet} />,
  },
  {
    name: "visibility",
    icon: <FontAwesomeIcon className={bottomStyles} icon={faEye} />,
  },
];
