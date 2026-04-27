import { Menu } from "lucide-react";
import { ASSETS } from "../../constants/assets";

type Props = {
  onMenuClick: () => void;
};

export const Navbar = ({ onMenuClick }: Props) => {
  return (
    <header className="h-14 bg-white shadow flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <Menu onClick={onMenuClick} className="w-5 h-5 text-xl md:hidden" />
        <h2 className="font-semibold text-gray-700 text-xl">Dashboard</h2>
      </div>

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