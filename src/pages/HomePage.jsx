import React from "react";
import Landing from "../components/Landing";
import LandingFirst from "../components/LandingFirst";
import Help from "../components/Help";
import Points from "../components/Points";
import SwiperComponent from "../reusable/SwiperComponent";
import SwiperComponentTwo from "../reusable/swiperComponentTwo";
import SubHeader from "../components/SubHeader";
const HomePage = () => {
  return (
    <div className={``}>
      <Landing />
      <SubHeader />
      <SwiperComponent />
      <LandingFirst />
      <div className={`myContainer py-[2rem] `}>
        <div className={`flex items-center justify-start space-x-3 pb-6 `}>
          <h4 className={`text-[24px] text-mainColor capitalize`}>SPECIAL</h4>
          <span className={`text-[24px] text-mainColor font-bold capitalize `}>
            SERVICES
          </span>
        </div>
        <SwiperComponentTwo />
      </div>
      <Help />
      <Points />
    </div>
  );
};

export default HomePage;
