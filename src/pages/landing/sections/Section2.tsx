import { FC, useRef } from "react";
import { Rerousel } from "rerousel";
import PracticeRanking from "components/PracticeRanking";
import appleImg from "assets/images/candidates/apple.jpg";
import bananaImg from "assets/images/candidates/banana.jpg";
import grapesImg from "assets/images/candidates/grapes.jpg";
import kiwiImg from "assets/images/candidates/kiwi.jpg";
import orangeImg from "assets/images/candidates/orange.jpg";
import pomegranateImg from "assets/images/candidates/pomegranate.jpg";
import watermelonImg from "assets/images/candidates/watermelon.jpg";
import strawberryImg from "assets/images/candidates/strawberry.jpg";

const Section2: FC = () => {
	const itemRef = useRef(null);

	return (
		<>
			<div className="relative h-[706px] text-black bg-white bg-no-repeat bg-strawberries">
				<div className="absolute right-0 px-20 py-10 text-4xl font-bold bg-white shadow-xl top-20 bg-opacity-20">
					<h1>Meet your candidates</h1>
				</div>
				<div className="absolute w-full transform -translate-x-1/2 border-l-8 border-r-8 scale-80 sm:scale-100 border-midvale-red top-1/2 left-1/2 md:w-3/4">
					<Rerousel itemRef={itemRef} interval={5000}>
						<div className="flex" ref={itemRef}>
							<div className="text-center transition ease-in-out transform scale-90 duration-2000 hover:scale-100">
								<img
									className="w-[200px] rounded-full shadow-lg mx-6"
									src={appleImg}
									alt="candidate 1"
								/>
								<p className="p-1 m-4 rounded-full shadow-md">
									Apple
								</p>
							</div>
							<div className="text-center transition ease-in-out transform scale-90 duration-2000 hover:scale-100">
								<img
									className="w-[200px] rounded-full shadow-lg mx-6"
									src={bananaImg}
									alt="candidate 2"
								/>
								<p className="p-1 m-4 rounded-full shadow-md">
									Banana
								</p>
							</div>
							<div className="text-center transition ease-in-out transform scale-90 duration-2000 hover:scale-100">
								<img
									className="w-[200px] rounded-full shadow-lg mx-6"
									src={grapesImg}
									alt="candidate 3"
								/>
								<p className="p-1 m-4 rounded-full shadow-md">
									Grapes
								</p>
							</div>
						</div>
						<div className="flex" ref={itemRef}>
							<div className="text-center transition ease-in-out transform scale-90 duration-2000 hover:scale-100">
								<img
									className="w-[200px] rounded-full shadow-lg mx-6"
									src={kiwiImg}
									alt="candidate 4"
								/>
								<p className="p-1 m-4 rounded-full shadow-md">
									Kiwi
								</p>
							</div>
							<div className="text-center transition ease-in-out transform scale-90 duration-2000 hover:scale-100">
								<img
									className="w-[200px] rounded-full shadow-lg mx-6"
									src={orangeImg}
									alt="candidate 5"
								/>
								<p className="p-1 m-4 rounded-full shadow-md">
									Orange
								</p>
							</div>
							<div className="text-center transition ease-in-out transform scale-90 duration-2000 hover:scale-100">
								<img
									className="w-[200px] rounded-full shadow-lg mx-6"
									src={pomegranateImg}
									alt="candidate 6"
								/>
								<p className="p-1 m-4 rounded-full shadow-md">
									Pomegranate
								</p>
							</div>
						</div>
						<div className="flex" ref={itemRef}>
							<div className="text-center transition ease-in-out transform scale-90 duration-2000 hover:scale-100">
								<img
									className="w-[200px] rounded-full shadow-lg mx-6"
									src={strawberryImg}
									alt="candidate 6"
								/>
								<p className="p-1 m-4 rounded-full shadow-md">
									Strawberry
								</p>
							</div>
							<div className="text-center transition ease-in-out transform scale-90 duration-2000 hover:scale-100">
								<img
									className="w-[200px] rounded-full shadow-lg mx-6"
									src={watermelonImg}
									alt="candidate 7"
								/>
								<p className="p-1 m-4 rounded-full shadow-md">
									Watermelon
								</p>
							</div>
						</div>
					</Rerousel>
				</div>
			</div>
			<div className="relative flex flex-col items-center w-full text-black bg-midvale-white">
				<div>{/* Mock candidate carousel */}</div>
				<h1 className="self-start px-20 py-4 mt-10 text-2xl font-bold bg-white shadow-lg bg-opacity-20">
					Practice Ranking
				</h1>
				<div className="my-10 shadow-2xl scale-65 sm:scale-100">
					<PracticeRanking />
				</div>
			</div>
		</>
	);
};

export default Section2;
