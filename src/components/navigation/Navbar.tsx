import { FC } from "react";
import { WebsiteName } from "constants/website-info";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
	return (
		<nav className="sticky top-0 z-40 flex justify-center h-16 text-white shadow-lg bg-midvale-red">
			<div className="flex items-center w-full p-4 sm:justify-between">
				<h1 className="mr-4 font-extrabold tracking-wider sm:mr-0 sm:text-2xl">
					{WebsiteName}
				</h1>
				<div className="flex justify-end space-x-5 text-xs sm:text-base">
					<a
						className="px-3 py-1 font-semibold rounded-full shadow-bold"
						href="https://www.midvalecity.org/"
						target="_blank"
						rel="noreferrer"
					>
						Midvale City Website
					</a>
					<NavLink
						exact
						to="/"
						className="px-3 py-1 font-semibold rounded-full shadow-lg"
						activeClassName="shadow-inner-lg"
					>
						Home
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
