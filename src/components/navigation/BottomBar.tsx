import { TwitterIcon } from "assets/icons";
import { WebsiteName } from "constants/website-info";

const BottomBar = () => {
	return (
		<div className="flex flex-col items-center justify-center font-semibold bg-midvale-red">
			<h1 className="text-2xl font-extrabold tracking-wider">
				{WebsiteName}
			</h1>
			<div className="text-center">
				<p>
					7505 Holden St. Midvale, UT 84047 | Phone (801) 567-7200 |
					Connecting People and Government
				</p>
			</div>
			<div>
				Website Design by{" "}
				<a
					className="font-bold text-blue-400"
					href="https://www.linkedin.com/in/stephenshorton/"
					target="_blank"
					rel="noreferrer"
				>
					Stephen Horton
				</a>
			</div>
			<div className="flex my-2">
				<a href="https://twitter.com/midvalecity" rel="noreferrer">
					<TwitterIcon />
				</a>
			</div>
		</div>
	);
};

export default BottomBar;
