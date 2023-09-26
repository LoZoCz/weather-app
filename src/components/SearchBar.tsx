import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { SearchForm } from "./export";
import { darkMode } from "../utils/helpers";

type setMainValue = {
  setMainValue: (value: string) => void;
};

export const SearchBar = ({ setMainValue }: setMainValue) => {
  return (
    <div className="w-full col-span-6 bg-slate-300 rounded-lg flex justify-between items-center gap-12 p-8 dark:bg-slate-900">
      <SearchForm setMainValue={setMainValue} />
      <button
        onClick={() => darkMode()}
        className="bg-slate-400 w-16 aspect-square rounded-lg hover:bg-slate-500 transition-all duration-200 dark:bg-slate-950 dark:text-neutral-100 dark:hover:bg-slate-800"
      >
        <FontAwesomeIcon icon={faMoon} />
      </button>
    </div>
  );
};
