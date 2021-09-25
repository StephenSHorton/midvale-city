import { FC, useState } from "react";

type Candidate = {
  name: string;
};

const stringRanks = ["1st", "2nd", "3rd", "4th", "5th"];

const PracticeRanking: FC = () => {
  const [rankedCandidates, setRankedCandidates] = useState<string[]>(
    new Array(5).fill("")
  );
  const candidates: Candidate[] = [
    {
      name: "Apple",
    },
    {
      name: "Banana",
    },
    {
      name: "Grapes",
    },
    {
      name: "Kiwi",
    },
    {
      name: "Orange",
    },
    {
      name: "Pomegranate",
    },
    {
      name: "Strawberry",
    },
    {
      name: "Watermelon",
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
                <td className="py-8 pl-4">
                  <span className="px-4 py-2 bg-gray-100 border-2 rounded-md border-midvale-red">
                    {candidate.name}
                  </span>
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
