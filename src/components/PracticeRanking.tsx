import { FC, useState } from "react";
import appleImg from "assets/images/candidates/apple.jpg";
import bananaImg from "assets/images/candidates/banana.jpg";
import grapesImg from "assets/images/candidates/grapes.jpg";
import kiwiImg from "assets/images/candidates/kiwi.jpg";
import orangeImg from "assets/images/candidates/orange.jpg";
import pomegranateImg from "assets/images/candidates/pomegranate.jpg";
import watermelonImg from "assets/images/candidates/watermelon.jpg";
import strawberryImg from "assets/images/candidates/strawberry.jpg";
import Confetti from "react-dom-confetti";

type Candidate = {
	name: string;
	profileImg?: React.ReactElement;
	rank: number;
	votes: number;
};

const stringRanks = ["1st", "2nd", "3rd", "4th", "5th"];

const initialState = [
	{
		name: "Apple",
		profileImg: (
			<img
				className="mx-6 rounded-full shadow-lg w-[25px]"
				src={appleImg}
				alt="apple"
			/>
		),
		rank: 0,
		votes: 0,
	},
	{
		name: "Banana",
		profileImg: (
			<img
				className="mx-6 rounded-full shadow-lg w-[25px]"
				src={bananaImg}
				alt="banana"
			/>
		),
		rank: 0,
		votes: 0,
	},
	{
		name: "Grapes",
		profileImg: (
			<img
				className="mx-6 rounded-full shadow-lg w-[25px]"
				src={grapesImg}
				alt="grapes"
			/>
		),
		rank: 0,
		votes: 0,
	},
	{
		name: "Kiwi",
		profileImg: (
			<img
				className="mx-6 rounded-full shadow-lg w-[25px]"
				src={kiwiImg}
				alt="kiwi"
			/>
		),
		rank: 0,
		votes: 0,
	},
	{
		name: "Orange",
		profileImg: (
			<img
				className="mx-6 rounded-full shadow-lg w-[25px]"
				src={orangeImg}
				alt="orange"
			/>
		),
		rank: 0,
		votes: 0,
	},
	{
		name: "Pomegranate",
		profileImg: (
			<img
				className="mx-6 rounded-full shadow-lg w-[25px]"
				src={pomegranateImg}
				alt="pomwegranate"
			/>
		),
		rank: 0,
		votes: 0,
	},
	{
		name: "Strawberry",
		profileImg: (
			<img
				className="mx-6 rounded-full shadow-lg w-[25px]"
				src={strawberryImg}
				alt="strawberry"
			/>
		),
		rank: 0,
		votes: 0,
	},
	{
		name: "Watermelon",
		profileImg: (
			<img
				className="mx-6 rounded-full shadow-lg w-[25px]"
				src={watermelonImg}
				alt="watermelon"
			/>
		),
		rank: 0,
		votes: 0,
	},
];

const PracticeRanking: FC = () => {
	const [showResults, setShowResults] = useState<boolean>(false);
	const [rankingErrors, setRankingErrors] = useState<string[]>([]);
	const confettiConfig = {
		angle: 90,
		spread: 360,
		startVelocity: 40,
		elementCount: 70,
		dragFriction: 0.12,
		duration: 3000,
		stagger: 3,
		width: "10px",
		height: "10px",
		perspective: "500px",
		colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
	};
	const [candidates, setCandidates] = useState<Candidate[]>(initialState);

	function resetCheckboxes() {
		const checkboxes = document.querySelectorAll("input[type=checkbox]");
		checkboxes.forEach((el) => {
			const temp = el as HTMLInputElement;
			temp.checked = false;
		});
	}

	function rankCandidate(candidate: Candidate, index: number, rank: number) {
		const temp = [...candidates];
		const votes = temp[index].votes + 1;
		temp[index] = {
			...temp[index],
			rank,
			votes,
		};
		setCandidates(temp);
	}

	function unrankCandidate(candidate: Candidate, index: number) {
		const temp = [...candidates];
		const votes = temp[index].votes - 1;
		let rank = temp[index].rank;
		if (votes === 0) {
			rank = 0;
		}
		temp[index] = {
			...temp[index],
			rank,
			votes,
		};
		setCandidates(temp);
	}

	function checkResults() {
		const errors: string[] = [];
		const temp = candidates.map((el) => el.rank).filter((el) => el !== 0);
		if (
			temp.filter((item, index) => temp.indexOf(item) !== index).length >
			0
		) {
			errors.push(
				"You voted for multiple candidates in the same ranking"
			);
		}
		if (temp.length !== 5) {
			errors.push("You didn't use all your votes");
		}
		const temp2 = candidates.map((el) => el.votes);
		for (let i = 0; i < temp.length; i++) {
			if (temp2[i] > 1) {
				errors.push("You voted for the same candidate more than once");
				break;
			}
		}
		if (errors.length > 0) {
			setRankingErrors(errors);
		}
	}

	function resetTest() {
		resetCheckboxes();
		setCandidates(initialState);
		setShowResults(false);
		setRankingErrors([]);
	}

	return (
		<div className="p-4 border-4 rounded-lg bg-midvale-white border-midvale-red">
			<table className="rounded-lg bg-midvale-white">
				<thead>
					<tr className="border-b-2 border-midvale-red">
						<th className="flex flex-col items-start justify-center p-4 pr-24">
							<span>Candidate</span>
							<span className="text-sm font-light">
								Rank up to 5 candidates
							</span>
						</th>
						<th className="px-6 py-4">1st</th>
						<th className="px-6 py-4">2nd</th>
						<th className="px-6 py-4">3rd</th>
						<th className="px-6 py-4">4th</th>
						<th className="px-6 py-4">5th</th>
					</tr>
				</thead>
				<tbody>
					{candidates.map((candidate, index) => {
						return (
							<tr key={index}>
								<td className="pt-2">
									<div className="relative flex justify-between w-2/3 px-4 py-2 bg-gray-100 border-2 rounded-md border-midvale-red">
										<p>{candidate.name}</p>
										<div className="absolute -right-4">
											{candidate.profileImg}
										</div>
									</div>
								</td>
								{stringRanks.map((rank, index2) => (
									<td key={index2}>
										<div className="flex items-center justify-center p-2 bg-gray-100 border-b-2 border-midvale-red">
											<input
												className="w-[20px] h-[20px]"
												type="checkbox"
												name={rank}
												disabled={showResults}
												onChange={(e) => {
													if (e.target.checked) {
														rankCandidate(
															candidate,
															index,
															index2 + 1
														);
													} else {
														unrankCandidate(
															candidate,
															index
														);
													}
												}}
											/>
										</div>
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="flex justify-end my-4">
				{showResults ? (
					<button
						className="px-3 py-1 text-xl font-semibold text-white rounded-md shadow-md bg-midvale-red"
						onClick={resetTest}
					>
						Reset
					</button>
				) : (
					<button
						className="px-3 py-1 text-xl font-semibold text-white rounded-md shadow-md bg-midvale-red"
						onClick={() => {
							checkResults();
							setShowResults(true);
						}}
					>
						Submit
					</button>
				)}
				<Confetti
					active={showResults && rankingErrors.length === 0}
					config={confettiConfig}
				/>
			</div>
			<div
				className={`${
					!showResults && "hidden"
				} flex flex-col p-4 border-2 rounded-md border-midvale-blue`}
			>
				<h2 className="px-2 py-1 font-semibold bg-gray-100 border-2 rounded-md border-midvale-blue">
					Results:
				</h2>
				<ul className={`${rankingErrors.length > 0 && "hidden"} mt-4`}>
					{candidates
						.filter((el) => el.rank !== 0)
						.sort((a, b) => a.rank - b.rank)
						.map((candidate, index) => (
							<li key={index} className="my-2 rounded-md">
								<div className="flex">
									<div className="w-10 px-1 mr-8 text-center bg-gray-100 border-2 rounded-md border-midvale-blue">
										{stringRanks[index] ?? "❌"}
									</div>
									<div>{candidate.name}</div>
								</div>
							</li>
						))}
				</ul>
				<ul className="mt-4">
					{rankingErrors.map((error, index) => (
						<li
							key={index}
							className="pl-4 my-2 text-xl font-bold text-white bg-red-500"
						>
							{error}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PracticeRanking;
