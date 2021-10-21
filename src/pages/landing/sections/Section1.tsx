import { FC } from "react";
import midvaleLogo from "assets/images/midvale_logo.png";

const Section1: FC = () => {
	return (
		<div className="relative flex flex-col items-center w-full text-black bg-mountains">
			<div className="self-start w-0 font-extrabold text-white uppercase scale-75 text-7xl sm:scale-100">
				<div className="w-[275px] p-2 text-right bg-midvale-blue border-8 border-midvale-blue">
					<span>Rank</span>
				</div>
				<div className="p-2 w-[340px] text-right bg-blue-700 border-8 border-blue-700">
					<span>The</span>
				</div>
				<div className="flex w-[420px] text-center">
					<div className="w-full p-2 bg-red-700 border-8 border-red-700">
						<span>Vote</span>
					</div>
					<div className="p-2 text-black bg-white border-8 border-black">
						<span>MVC</span>
					</div>
				</div>
			</div>
			<img
				src={midvaleLogo}
				alt="midvale logo"
				className="sm:absolute sm:right-0"
			/>
			<h2 className="p-6 my-32 text-2xl font-light text-center bg-white shadow-2xl md:text-4xl bg-opacity-20">
				<strong>Ranked Choice Voting</strong> allows voters to vote
				their preference
			</h2>
		</div>
	);
};

export default Section1;
