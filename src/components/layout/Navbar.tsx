import { ASSETS } from "../../constants/assets";

type Props = {
  onMenuClick: () => void;
};

export const Navbar = ({ onMenuClick }: Props) => {
  return (
    <header className="h-14 bg-white shadow flex items-center justify-between px-6">

      <button
        onClick={onMenuClick}
        className="md:hidden text-xl"
      >
        ☰
      </button>

      <h2 className="font-semibold text-gray-700 text-xl">
        Dashboard
      </h2>

      <div className="flex items-center gap-3">
        <img
          className="w-8 h-8 rounded-full"
          src={ASSETS.logo}
          alt="User Icon"
        />
      </div>

    </header>
  );
};