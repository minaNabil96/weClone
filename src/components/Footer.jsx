import React from "react";
import { useEffect } from "react";
import Button from "../reusable/Button.jsx";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube, FaSquareInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

//
const appleImg = `https://www.te.eg/images/store_en.png`;
const googleImg = `https://www.te.eg/images/google_en.png`;

const icons = [
  { id: 1, icon: <FaFacebookF />, name: "facebook" },
  { id: 2, icon: <RiTwitterXFill />, name: "twitter" },
  { id: 3, icon: <FaYoutube />, name: "youtube" },
  { id: 4, icon: <FaSquareInstagram />, name: "instagram" },
  { id: 5, icon: <FaLinkedinIn />, name: "linkedin" },
];

const tabs = [
  {
    name: "TELECOMEGYPT",
    subNames: ["Mission and Vision", "Board of Directors", "Careers"],
  },
  {
    name: "CONTACT US",
    subNames: ["Our Contact Channels", "Email Us"],
  },
  {
    name: "SUPPORT",
    subNames: [
      "FAQ",
      "Store Locator",
      "Live Chat & Support",
      "Ma3ak",
      "Internal Wiring Service",
    ],
  },
  {
    name: "MY ACCOUNT",
    subNames: ["Manage My Landline", "Manage My Internet", "Manage My Mobile"],
  },
];
//
const Footer = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  const iconsMap = icons.map(({ id, icon, name }) => (
    <div
      className={`flex items-center justify-center ${
        name === "facebook"
          ? "text-white"
          : name === "twitter"
          ? "text-white"
          : name === "youtube"
          ? "text-white"
          : name === "instagram"
          ? "text-white"
          : name === "linkedin"
          ? "text-white"
          : ""
      } ${
        name === "facebook"
          ? "bg-blue-700"
          : name === "twitter"
          ? "bg-black"
          : name === "youtube"
          ? "bg-red-600"
          : name === "instagram"
          ? " bg-fuchsia-700"
          : name === "linkedin"
          ? "bg-blue-600"
          : ""
      } text-[22px] p-1 `}
      key={id}
    >
      {icon}
    </div>
  ));

  const tabsMap =
    tabs &&
    tabs.map(({ name, subNames }, idx) => (
      <ul key={idx} className={`text-start space-y-2  sm:me-5 my-3 lg:my-6  `}>
        <h2
          className={` text-mainColor  w-fit text-[17px] font-semibold capitalize cursor-pointer`}
        >
          {name}
        </h2>
        <li className={``}>
          {subNames.map((name, idx) => (
            <p
              key={idx}
              className={`text-slate-500 hover:text-mainColor  text-[14.5px]  capitalize cursor-pointer duration-150 w-fit max-w-[200px] `}
            >
              {name}
            </p>
          ))}
        </li>
      </ul>
    ));

  return (
    <footer className="pt-6  bg-mainColor/5 border-t-2 border-mainColor ">
      <div className="myContainer ">
        <div className="grid  grid-cols-4 max-md:grid-cols-1  text-center text-lg-start max-lg:max-w-xl max-w-4xl xl:max-w-5xl xl:mx-auto  ">
          {tabsMap}
        </div>
        <div
          className={`max-w-4xl xl:max-w-5xl grid grid-cols-2 max-md:grid-cols-1 max-lg:max-w-xl `}
        >
          <div>
            <h3
              className={`text-mainColor py-4 w-fit text-[17px] font-semibold capitalize `}
            >{`follow us`}</h3>
            <div className={`flex items-center justify-start w-full space-x-2`}>
              {iconsMap}
            </div>
          </div>
          <div className="self-center">
            <h3
              className={`text-mainColor py-4 w-fit text-[17px] font-semibold capitalize `}
            >{`DOWNLOAD OUR APP`}</h3>
            <div className={`flex items-center justify-start w-full space-x-4`}>
              <img
                src={appleImg}
                alt="appleimg"
                className={`w-[120px] cursor-pointer `}
              />
              <img
                src={googleImg}
                alt="googleImg"
                className={`w-[120px] cursor-pointer `}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={` mt-6 flex flex-col items-center justify-center space-y-2 w-full bg-[#363636] py-6`}
      >
        <p
          className={`text-[16px] text-stone-400 text-center font-thin w-[80%]  `}
        >{`For all mobile, internet and fixed line users: in case you are unable to solve any problem you have encountered with your service provider, kindly dial 155 to call the National Telecom Regulatory Authority (NTRA) customer service call center and submit your complaint. This number works seven days a week, from 8:00 a.m. to 10:00 p.m.`}</p>
        <div className=" space-y-1 pt-4  cursor-default flex flex-col items-center justify-center  ">
          <p className="  text-fuchsia-600  cursor-default font-semibold text-[17px]">
            Created by{" "}
            <span className="  cursor-default text-yellow-600 font-bold">
              {" "}
              Mina Nabil
            </span>{" "}
          </p>
          <span className="text-stone-500 text-[17px]  cursor-default">
            all rights resaved &copy;{` ${new Date().getFullYear()}`}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
