import logo from "../assets/icon.svg";

export const Logo = () => {
  return (
    <div className="w-full col-span-2 bg-slate-300 rounded-lg grid place-items-center dark:bg-slate-900">
      <div className="flex items-center gap-1">
        <img className="w-16" src={logo} alt="main logo" />
        <h1 className="text-5xl font-bold text-blue-600">Weather360</h1>
      </div>
    </div>
  );
};
