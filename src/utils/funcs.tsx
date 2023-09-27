import { weatherIcons, sunCardType, bottomIcons } from "./helpers";

export const kelIntoCelc = (kelvin: number | undefined): number => {
  const celsius = kelvin === undefined ? 0 : kelvin - 273.15;
  return Math.round(celsius);
};

export const upperFirstLetter = (str: string | undefined | null): string => {
  return str === undefined || str === null
    ? ""
    : str.charAt(0).toUpperCase() + str.slice(1);
};

export const unixToNowHours = (unix: number | undefined): string => {
  const data = unix === undefined ? new Date() : new Date(unix * 1000);

  const godzina = data.getHours();
  const minuta = data.getMinutes();

  const godzinaFormatowana = String(godzina).padStart(2, "0");
  const minutaFormatowana = String(minuta).padStart(2, "0");

  return `${godzinaFormatowana}:${minutaFormatowana}`;
};

export const findWeatherIconByName = (name: string | undefined) => {
  const iconData = weatherIcons.find((icon) => icon?.name === name);
  return iconData?.icon;
};

export const sunType = (name: string) => {
  const iconData = sunCardType.find((icon) => icon?.name === name);
  return iconData?.icon;
};

export const bottomCardType = (name: string) => {
  const iconData = bottomIcons.find((icon) => icon?.name === name);
  return iconData?.icon;
};

export const darkMode = () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );
};

export const darkThemeUser = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "dark" || (storedTheme === null && prefersDarkMode)) {
    document.documentElement.classList.add("dark");
  }
};
