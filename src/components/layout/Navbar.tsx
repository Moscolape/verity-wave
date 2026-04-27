import { ASSETS } from "../../constants/assets";

export const Navbar = () => {
  return (
    <header className="h-14 bg-white shadow flex items-center justify-between px-6">

      <h2 className="font-semibold text-gray-700 text-xl">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <img className="w-8 h-8 rounded-full" src={ASSETS.logo} alt="User Icon" />
      </div>

    </header>
  );
};