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
        <div className="absolute w-full transform -translate-x-1/2 border-l-8 border-r-8 border-midvale-red top-1/2 left-1/2 md:w-3/4">
          <Rerousel itemRef={itemRef} interval={5000}>
            <div className="flex" ref={itemRef}>
              <div className="text-center">
                <img
                  className="w-[200px] rounded-full shadow-lg mx-6"
                  src={appleImg}
                  alt="candidate 1"
                />
                <p className="p-1 m-4 rounded-full shadow-lg">Apple</p>
              </div>
              <div className="text-center">
                <img
                  className="w-[200px] rounded-full shadow-lg mx-6"
                  src={bananaImg}
                  alt="candidate 2"
                />
                <p className="p-1 m-4 rounded-full shadow-lg">Banana</p>
              </div>
              <div className="text-center">
                <img
                  className="w-[200px] rounded-full shadow-lg mx-6"
                  src={grapesImg}
                  alt="candidate 3"
                />
                <p className="p-1 m-4 rounded-full shadow-lg">Grapes</p>
              </div>
            </div>
            <div className="flex" ref={itemRef}>
              <div className="text-center">
                <img
                  className="w-[200px] rounded-full shadow-lg mx-6"
                  src={kiwiImg}
                  alt="candidate 4"
                />
                <p className="p-1 m-4 rounded-full shadow-lg">Kiwi</p>
              </div>
              <div className="text-center">
                <img
                  className="w-[200px] rounded-full shadow-lg mx-6"
                  src={orangeImg}
                  alt="candidate 5"
                />
                <p className="p-1 m-4 rounded-full shadow-lg">Orange</p>
              </div>
              <div className="text-center">
                <img
                  className="w-[200px] rounded-full shadow-lg mx-6"
                  src={pomegranateImg}
                  alt="candidate 6"
                />
                <p className="p-1 m-4 rounded-full shadow-lg">Pomegranate</p>
              </div>
            </div>
            <div className="flex" ref={itemRef}>
              <div className="text-center">
                <img
                  className="w-[200px] rounded-full shadow-lg mx-6"
                  src={strawberryImg}
                  alt="candidate 6"
                />
                <p className="p-1 m-4 rounded-full shadow-lg">Strawberry</p>
              </div>
              <div className="text-center">
                <img
                  className="w-[200px] rounded-full shadow-lg mx-6"
                  src={watermelonImg}
                  alt="candidate 7"
                />
                <p className="p-1 m-4 rounded-full shadow-lg">Watermelon</p>
              </div>
            </div>
          </Rerousel>
        </div>
      </div>
      <div className="relative bg-midvale-white w-full h-[1281px] flex flex-col items-center text-black">
        <div>{/* Mock candidate carousel */}</div>
        <h1 className="self-start px-20 py-4 mt-10 text-2xl font-bold bg-white shadow-lg bg-opacity-20">
          Practice Ranking
        </h1>
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 shadow-2xl top-1/2 left-1/2">
          <PracticeRanking />
        </div>
        <div>{/* Show results / clear responses */}</div>
      </div>
    </>
  );
};

export default Section2;
