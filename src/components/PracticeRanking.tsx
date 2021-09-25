import { FC, useState } from "react";
import appleImg from "assets/images/candidates/apple.jpg";
import bananaImg from "assets/images/candidates/banana.jpg";
import grapesImg from "assets/images/candidates/grapes.jpg";
import kiwiImg from "assets/images/candidates/kiwi.jpg";
import orangeImg from "assets/images/candidates/orange.jpg";
import pomegranateImg from "assets/images/candidates/pomegranate.jpg";
import watermelonImg from "assets/images/candidates/watermelon.jpg";
import strawberryImg from "assets/images/candidates/strawberry.jpg";

type Candidate = {
  name: string;
  profileImg?: React.ReactElement;
};

const stringRanks = ["1st", "2nd", "3rd", "4th", "5th"];

const PracticeRanking: FC = () => {
  const [rankedCandidates, setRankedCandidates] = useState<string[]>(
    new Array(5).fill("")
  );
  const candidates: Candidate[] = [
    {
      name: "Apple",
      profileImg: (
        <img
          className="mx-6 rounded-full shadow-lg w-[25px]"
          src={appleImg}
          alt="apple"
        />
      ),
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
    },
  ];

  function rankCandidate(candidate: Candidate, index: number) {
    const temp = [...rankedCandidates];
    if (temp[index] !== "") {
      if (temp[index] === candidate.name) {
        temp[index] = "";
        setRankedCandidates(temp);
        return;
      } else {
        temp[index] = candidate.name;
        setRankedCandidates(temp);
        return;
      }
    }
    temp[index] = candidate.name;
    setRankedCandidates(temp);
  }

  function isChecked(candidate: Candidate, index: number) {
    return (
      rankedCandidates[index] !== "" &&
      rankedCandidates[index] === candidate.name
    );
  }

  function isDisabled(candidate: Candidate, index: number) {
    const candidateIndex = rankedCandidates.findIndex(
      (el) => el === candidate.name
    );
    return candidateIndex >= 0 && index !== candidateIndex;
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
                {new Array(5).fill(undefined).map((_, index2) => (
                  <td>
                    <div className="flex items-center justify-center p-2 bg-gray-100 border-b-2 border-midvale-red">
                      <input
                        className="w-[20px] h-[20px]"
                        type="checkbox"
                        checked={isChecked(candidate, index2)}
                        onChange={() => rankCandidate(candidate, index2)}
                        disabled={isDisabled(candidate, index2)}
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
        <button
          className="px-3 py-1 text-xl font-semibold text-white rounded-md shadow-md bg-midvale-red"
          onClick={() => setRankedCandidates(new Array(5).fill(""))}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-col p-4 border-2 rounded-md border-midvale-blue">
        <h2 className="px-2 py-1 font-semibold bg-gray-100 border-2 rounded-md border-midvale-blue">
          Results:
        </h2>
        <ul className="mt-4">
          {rankedCandidates.map((name, index) => (
            <li key={index} className="my-2 rounded-md">
              <div className="flex">
                <div className="w-10 px-1 mr-8 text-center bg-gray-100 border-2 rounded-md border-midvale-blue">
                  {stringRanks[index]}
                </div>
                <div>{name}</div>
              </div>
            </li>
          ))}
        </ul>
        {rankedCandidates.filter((name) => name !== "").length === 5 ? (
          <div className="flex space-x-2 text-red-600">
            {candidates
              .filter((candidate) => !rankedCandidates.includes(candidate.name))
              .map((candidate, index) => (
                <p key={index} className="">
                  <s>{candidate.name}</s>
                </p>
              ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PracticeRanking;
