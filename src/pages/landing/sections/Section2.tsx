import { FC } from "react";
import PracticeRanking from "components/PracticeRanking";

const Section2: FC = () => {
  return (
    <div className="bg-paper w-full h-[1281px] flex flex-col items-center text-black">
      <div>{/* Mock candidate carousel */}</div>
      <h1 className="self-start px-20 py-4 mt-10 text-2xl font-bold shadow-lg">
        Practice Ranking
      </h1>
      <div className="mt-10">
        <PracticeRanking />
      </div>
      <div>{/* Show results / clear responses */}</div>
    </div>
  );
};

export default Section2;
