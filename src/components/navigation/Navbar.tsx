import { FC } from "react";
import { WebsiteName } from "constants/website-info";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav className="sticky top-0 z-40 flex justify-center bg-midvale-red text-white shadow-md h-16">
      <div className="flex items-center justify-between w-full p-4">
        <h1 className="text-2xl font-bold">{WebsiteName}</h1>
        <div className="flex justify-end space-x-5">
          <NavLink
            exact
            to="/"
            className="px-3 font-semibold rounded-full shadow-lg border-2 border-gray-600 py-1"
            activeClassName="shadow-inner-lg border-transparent"
          >
            Home
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
