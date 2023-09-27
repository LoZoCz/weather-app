import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type SearchFormProps = {
  setMainValue: (value: string) => void;
};

export const SearchForm = ({ setMainValue }: SearchFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleValue();
  };

  const handleValue = () => {
    if (inputValue === "") return;

    setMainValue(inputValue);

    setInputValue("");
  };

  return (
    <form className="flex gap-2 flex-1 md:gap-4" onSubmit={handleSubmit}>
      <input
        className="flex-1 w-24 h-10 p-2 rounded-lg text-xl outline-none dark:bg-slate-700 dark:text-neutral-100 md:h-16"
        type="text"
        placeholder="Search destiantion..."
        onChange={handleInputChange}
        value={inputValue}
      />
      <button
        type="submit"
        className="bg-slate-400 w-10 rounded-lg hover:bg-slate-500 transition-all duration-200 dark:bg-slate-950 dark:text-neutral-100 dark:hover:dark:bg-slate-800 md:w-16"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};
