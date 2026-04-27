import { NavLink } from "react-router-dom";
import { ASSETS } from "../../constants/assets";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white p-5 flex flex-col gap-4">

      <div className="flex items-center gap-3">
        <img src={ASSETS.logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold">VerityWave</h1>
      </div>

      <nav className="flex flex-col gap-3 mt-6">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded transition ${
              isActive
                ? "bg-gray-300 text-black font-semibold"
                : "hover:bg-gray-800 text-white"
            }`
          }
        >
          Dashboard
        </NavLink>

      </nav>
    </aside>
  );
};