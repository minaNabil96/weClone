import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import weLogo from "../assets/weLogo.png";

//
const tabs = [
  // { name: "About", arabicName: "عنا", path: "/about" },
  { name: "Mobile", arabicName: "التواصل", path: "#" },
  { name: "Home", arabicName: "الرئيسية", path: "#" },
  { name: "Services", arabicName: "الرئيسية", path: "#" },
  { name: "Devices", arabicName: "الرئيسية", path: "#" },
  { name: "Promotions", arabicName: "الرئيسية", path: "#" },
  { name: "Shop", arabicName: "الرئيسية", path: "#" },
  { name: "WE Pay", arabicName: "الرئيسية", path: "#" },
];
//

const SubHeader = () => {
  const [hoverIdx, setHoverIdx] = useState(1);
  // toolkit
  const dispatch = useDispatch();
  const { menuStatus, bigMenuStatus } = useSelector(
    (state) => state.smallMenuSlice
  );

  const tabsMap = tabs.map(({ name, arabicName, path }, idx) => (
    <div
      key={idx}
      className={`   cursor-pointer flex items-center  justify-center min-w-fit  h-full duration-150   `}
      onMouseEnter={() => idx !== 0 && setHoverIdx(idx)}
    >
      <p
        className={` text-slate-700 hover:text-stone-400  hover:border-mainColor  border-opacity-0 hover:border-opacity-100 border-t border-transparent  text-[17px]  px-6 py-3 min-w-full  duration-[400ms] 
            `}
      >
        {name}
      </p>
    </div>
  ));

  return (
    <div className={` max-xl:hidden h-28 overflow-hidden  bg-mainColor`}>
      <div className={`bg-white/80 h-full `}>
        <div
          className={` h-full myContainer  flex items-center justify-between   `}
        >
          <div className={`flex items-center justify-start `}>
            <img src={weLogo} alt="welogo" className={`object-cover `} />
          </div>
          <div className={` h-full md flex items-center justify-center  `}>
            <div className={`flex h-full  items-center justify-center  `}>
              {tabsMap}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
