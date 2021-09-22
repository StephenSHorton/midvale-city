import { FacebookIcon, InstagramIcon, TwitterIcon } from "assets/icons";
import { WebsiteName } from "constants/website-info";

const BottomBar = () => {
  return (
    <div className="bg-midvale-red flex flex-col justify-center items-center">
      <h1 className="font-semibold text-2xl">{WebsiteName}</h1>
      <div className="flex my-2">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  );
};

export default BottomBar;
