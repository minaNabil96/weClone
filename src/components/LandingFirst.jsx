import React, { useState, useLayoutEffect } from "react";
import database from "../assets/database.json";
import { Link } from "react-router-dom";
import {
  FaMobileScreenButton,
  FaEarthAfrica,
  FaRegMoneyBill1,
  FaMobileScreen,
} from "react-icons/fa6";
//

const iconsForCards = [
  { iconId: 2, icon: <FaMobileScreenButton /> },
  { iconId: 3, icon: <FaEarthAfrica /> },
  { iconId: 4, icon: <FaRegMoneyBill1 /> },
  { iconId: 5, icon: <FaMobileScreen /> },
];

const LandingFirst = () => {
  const [loaded, setLoaded] = useState(false);

  const imagesHandler = (imgname) => {
    setLoaded(true);
  };

  const newsMap =
    database &&
    database.map(({ id, image, title }, idx) => (
      <div
        className={`relative  ${
          idx === 0 || idx === 1
            ? "max-sm:col-span-4 sm:col-span-2 h-[12rem] md:h-[12rem] lg:h-[15rem] xl:h-[18rem] "
            : " max-md:col-span-4 md:col-span-2 xl:col-span-1  h-[13rem]"
        } min-w-full cursor-pointer rounded-xl flex items-center justify-center `}
        key={idx}
      >
        {image && image.includes("www") && (idx === 0 || idx === 1) ? (
          <img
            src={image}
            alt={image}
            className={`w-full  h-full object-cover rounded-2xl ${
              loaded ? "" : "invisible"
            }  `}
            onLoad={() => imagesHandler()}
          />
        ) : (
          <div
            className={`w-full h-full relative  rounded-2xl flex items-center justify-between  `}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
            }}
          >
            <span
              className={` absolute w-full h-full rounded-2xl   `}
              style={{
                backgroundColor: `${
                  idx === 2
                    ? "rgba(59,67, 148, 0.8)"
                    : idx === 3
                    ? "rgba(112,34,131,0.8)"
                    : idx === 4
                    ? "rgba(209,4, 75, 0.8)"
                    : idx === 5
                    ? "rgba(150,32, 113, 0.8)"
                    : ""
                }`,
              }}
            ></span>
            <div
              className={` w-[94%]  mx-auto flex items-center justify-between  h-full z-10  `}
            >
              <div>
                <h2
                  className={` max-w-[80%] leading-8 text-slate-50 text-[29px]  font-bold p-3  `}
                >
                  {title}
                </h2>
              </div>

              {iconsForCards.map(({ iconId, icon }) => (
                <span
                  key={iconId}
                  className={`text-slate-50 ${
                    iconId === 4 ? "text-[89px]" : "text-[84px]"
                  } `}
                >
                  {iconId === idx && icon}
                </span>
              ))}
            </div>
          </div>
        )}
        <div
          className={`w-full h-full object-cover  bg-mainColor  ${
            loaded ? "hidden" : ""
          } `}
        ></div>
      </div>
    ));
  return (
    <div className={`bg-white `}>
      <div className={` myContainer py-10 `}>
        <div className={`grid   grid-cols-4   gap-4  `}>{newsMap}</div>
      </div>
    </div>
  );
};

export default LandingFirst;
