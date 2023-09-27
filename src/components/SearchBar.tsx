import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { SearchForm } from "./export";
import { darkMode } from "../utils/funcs";

type setMainValue = {
  setMainValue: (value: string) => void;
  windowWidth: number;
};

export const SearchBar = ({ setMainValue, windowWidth }: setMainValue) => {
  return (
    <div className="w-full col-span-4 row-span-1 bg-slate-300 rounded-lg flex justify-between items-center gap-6 md:gap-12 p-6 md:p-8 dark:bg-slate-900 2xl:row-span-1 xl:col-span-6 xl:row-span-2 md:row-span-1">
      <SearchForm setMainValue={setMainValue} />
      {windowWidth > 600 && (
        <button
          onClick={() => darkMode()}
          className="bg-slate-400 w-10 h-10 rounded-lg hover:bg-slate-500 transition-all duration-200 dark:bg-slate-950 dark:text-neutral-100 dark:hover:bg-slate-800 md:w-16 md:h-16"
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      )}
    </div>
  );
};
