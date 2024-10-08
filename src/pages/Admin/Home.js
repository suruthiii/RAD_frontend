import React from "react";
import MainHeader from "../../components/Headers/MainHeader";
import RightContainer from "../../components/Home/RightContainer";
import MiddleContainer from "../../components/Home/MiddleContainer";
import ProgressCircle from "../../components/Home/MiddleContainer/ProgressCircle";
import WelcomeMessage from "../../components/Home/MiddleContainer/WelcomeMessage";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <div class="ml-[21rem] mt-[5rem] w-[76vw] flex justify-center">
        <div class="w-[70%] mr-4">
          <div class="border rounded-xl p-[20px] flex justify-between items-center h-[220px]">
            <div>
              <WelcomeMessage />
            </div>
            <div className="flex items-center justify-center relative translate-x-[-80px] ">
              <ProgressCircle />
            </div>
          </div>
          <div class="border rounded-xl p-[20px] mt-10">
            <MiddleContainer />
          </div>
        </div>
        <div class="border w-[30%] ml-4 rounded-xl p-[20px]">
          <RightContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
