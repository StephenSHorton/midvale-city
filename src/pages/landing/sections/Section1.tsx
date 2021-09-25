import { FC } from "react";

const Section1: FC = () => {
  return (
    <div className="bg-mountains w-full md:h-[1271px] flex flex-col items-center text-black">
      <div className="place-self-start">
        <div className="font-extrabold text-white uppercase text-7xl">
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
      </div>
      <h2 className="p-6 my-6 text-2xl font-light text-center bg-white shadow-2xl md:text-4xl bg-opacity-20">
        <strong>Ranked-Choice Voting</strong> allows voters to vote their
        preference
      </h2>
      <p></p>
      <div className="p-6 mb-10 bg-white shadow-2xl bg-opacity-20 md:mb-0">
        <iframe
          className="w-[400px] h-[245px] xl:w-[1280px] xl:h-[720px]"
          src="https://www.youtube.com/embed/TIVFxAB3LV8"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Section1;
