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
      name: "Henry Ford",
    },
    {
      name: "John Deere",
    },
    {
      name: "Michael Scott",
    },
    {
      name: "Gordon Ramsey",
    },
    {
      name: "Jimmy Neutron",
    },
    {
      name: "Extra Candidate 1",
    },
    {
      name: "Extra Candidate 2",
    },
    {
      name: "Extra Candidate 3",
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
    <div className="p-4 bg-gray-300 border-4 rounded-lg border-midvale-red">
      <table className="bg-gray-200 rounded-lg">
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
                  <span className="px-4 py-2 border-2 rounded-md bg-gray-50 border-midvale-red">
                    {candidate.name}
                  </span>
                </td>
                {new Array(5).fill(undefined).map((_, index2) => (
                  <td>
                    <div className="flex items-center justify-center p-2 border-b-2 border-midvale-red bg-gray-50">
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
      <div className="flex flex-col rounded-md p-4border-2 border-midvale-blue">
        <h2 className="px-2 py-1 font-semibold bg-gray-200 border-2 rounded-md border-midvale-blue">
          Results:
        </h2>
        <ul className="mt-4">
          {rankedCandidates.map((name, index) => (
            <li key={index} className="my-2 rounded-md">
              <div className="flex">
                <div className="w-10 px-1 mr-8 text-center bg-gray-200 border-2 rounded-md border-midvale-blue">
                  {stringRanks[index]}
                </div>
                <div>{name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PracticeRanking;
