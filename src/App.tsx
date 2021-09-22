import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "constants/Routes";
import Navbar from "components/navigation/Navbar";
import BottomBar from "components/navigation/BottomBar";
import Landing from "pages/landing/landing";

const App: FC = () => {
  return (
    <div className="flex justify-center App bg-midvale-blue text-white">
      <div className="w-3/4 xl:w-2/3 sm:w-full">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          transition={Flip}
          style={{ fontWeight: "bolder" }}
        />
        <Navbar />
        <div className="w-full">
          <Switch>
            <Route exact path={Routes.landing} component={Landing} />
          </Switch>
        </div>
        <BottomBar />
      </div>
    </div>
  );
};

export default App;
