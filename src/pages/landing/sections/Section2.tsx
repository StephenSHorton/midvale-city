import { FC } from "react";
import PracticeRanking from "components/PracticeRanking";

const Section2: FC = () => {
  return (
    <div className="relative bg-paper w-full h-[1281px] flex flex-col items-center text-black">
      <div>{/* Mock candidate carousel */}</div>
      <h1 className="self-start px-20 py-4 mt-10 text-2xl font-bold bg-white shadow-lg bg-opacity-20">
        Practice Ranking
      </h1>
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <PracticeRanking />
      </div>
      <div>{/* Show results / clear responses */}</div>
    </div>
  );
};

export default Section2;
