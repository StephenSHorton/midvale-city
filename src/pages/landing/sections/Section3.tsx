import { FC } from "react";

const Section3: FC = () => {
  return (
    <div className="text-white bg-no-repeat bg-box-papers">
      <h1 className="p-4 text-3xl font-bold bg-white shadow-lg bg-opacity-20">
        Frequently Asked Questions
      </h1>
      <div className="mt-10">
        <Accordion
          title={"What is Ranked Choice Voting?"}
          text={
            <>
              <p>
                Ranked Choice Voting (RCV) allows voters to rank candidates by
                preference instead of choosing just one. It works like this:
              </p>
              <p>
                <strong>
                  1<sup>st</sup> Choice:
                </strong>{" "}
                The candidate you love.
              </p>
              <p>
                <strong>2nd choice:</strong> The candidate you like.
              </p>
              <p>
                <strong>3rd or 4th choice:</strong> The candidate you like
                slightly less.
              </p>
              <p>
                <strong>
                  5<sup>th</sup> choice:
                </strong>{" "}
                The candidate you can stand.
              </p>
            </>
          }
        ></Accordion>
        <Accordion
          title={"How many candidates do I rank?"}
          text={
            <p>
              You can rank up to 5 candidates, as many or as few as you’d like.
            </p>
          }
        ></Accordion>
        <Accordion
          title={"Why should I rank the candidates"}
          text={
            <ul className="ml-5 list-disc">
              <li>
                <strong>More choice, more power!</strong>
              </li>
              <li>
                Even if your favorite candidate doesn’t win, you still have a
                say in who’s elected.
              </li>
              <li>
                You can vote your conscience without worrying that you’re
                wasting your vote or electing a candidate you don’t like.
              </li>
              <li>
                Ranking a 2nd, 3rd, etc. choice will never hurt your favorite
                candidate.
              </li>
            </ul>
          }
        ></Accordion>
        <Accordion
          title={"How do I fill out a Ranked Choice ballot?"}
          text={
            <>
              <p>
                Ranked Choice Voting is easy! Instead of choosing just one
                candidate, you can rank them, from your first choice to your
                fifth.
              </p>
              <p>
                Find the name of your first choice and fill in the oval next to
                their name in the “1st Choice” column. Then find the name of
                your second choice, and fill in the oval next to their name in
                the “2nd Choice” column. Continue until you have ranked all the
                candidates you choose to rank, up to five.
              </p>
            </>
          }
        ></Accordion>
        <Accordion
          title={
            "Can I rank my favorite candidate more than once or in every position? Does my vote get counted if I rank my favorite choice in every position?"
          }
          text={
            <p>
              Your vote will count only once for that candidate, so it doesn’t
              help their chances of winning. If they are defeated in a
              round,&nbsp; you don’t have any backup choices to be counted in
              later rounds. It does not help your favorite candidate to rank
              them more than once.
            </p>
          }
        ></Accordion>
      </div>
    </div>
  );
};

type AccordionProps = {
  title: string;
  text: string | React.ReactElement;
};

const Accordion: FC<AccordionProps> = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <button className="w-2/3 mb-10 text-left shadow-lg group">
        <div className="px-8 py-4 text-xl font-bold rounded-t-lg rounded-b-lg bg-midvale-blue group-focus:rounded-b-none group-focus:bg-midvale-red">
          {title}
        </div>
        <div className="relative w-full transition ease-in-out transform scale-y-0 text-midvale-blue duration-2000 group-focus:scale-y-100">
          <div className="absolute flex flex-col w-full p-4 space-y-3 rounded-b-lg bg-midvale-white">
            {text}
          </div>
        </div>
      </button>
    </div>
  );
};

export default Section3;
