import { FC, useState } from "react";

type Candidate = {
  name: string;
};
//TODO allow checked boxes to be unchecked (not just on refresh)
const PracticeRanking: FC = () => {
  const [rankedCandidates, setRankedCandidates] = useState<string[]>([]);
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
    temp[index] = candidate.name;
    setRankedCandidates(temp);
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
                <td>
                  <div className="flex items-center justify-center p-2 border-b-2 border-midvale-red bg-gray-50">
                    <input
                      className="w-[20px] h-[20px]"
                      type="checkbox"
                      onChange={() => rankCandidate(candidate, 0)}
                      disabled={
                        rankedCandidates.find((el) => el === candidate.name) !==
                          undefined || rankedCandidates[0] !== undefined
                      }
                    />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center p-2 border-b-2 border-midvale-red bg-gray-50">
                    <input
                      className="w-[20px] h-[20px]"
                      type="checkbox"
                      onChange={() => rankCandidate(candidate, 1)}
                      disabled={
                        rankedCandidates.find((el) => el === candidate.name) !==
                          undefined || rankedCandidates[1] !== undefined
                      }
                    />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center p-2 border-b-2 border-midvale-red bg-gray-50">
                    <input
                      className="w-[20px] h-[20px]"
                      type="checkbox"
                      onChange={() => rankCandidate(candidate, 2)}
                      disabled={
                        rankedCandidates.find((el) => el === candidate.name) !==
                          undefined || rankedCandidates[2] !== undefined
                      }
                    />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center p-2 border-b-2 border-midvale-red bg-gray-50">
                    <input
                      className="w-[20px] h-[20px]"
                      type="checkbox"
                      onChange={() => rankCandidate(candidate, 3)}
                      disabled={
                        rankedCandidates.find((el) => el === candidate.name) !==
                          undefined || rankedCandidates[3] !== undefined
                      }
                    />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center p-2 border-b-2 border-midvale-red bg-gray-50">
                    <input
                      className="w-[20px] h-[20px]"
                      type="checkbox"
                      onChange={() => rankCandidate(candidate, 4)}
                      disabled={
                        rankedCandidates.find((el) => el === candidate.name) !==
                          undefined || rankedCandidates[4] !== undefined
                      }
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PracticeRanking;
