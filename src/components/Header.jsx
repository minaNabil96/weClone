import React, { useState, useLayoutEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { GoTriangleDown, GoTriangleUp, GoTriangleRight } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import useDetectOutside from "../reusable/useDetectOutSide";
import weLogo from "../assets/weLogo.png";
import { changeSerarchStatus } from "../store/reducers/searchSlice";
import { changeMenuStatus } from "../store/reducers/smallMenuSlice";
import { createPortal } from "react-dom";
import smallMenuPersonalData from "../assets/smallMenuPersonalData.json";
import { Link } from "react-router-dom";
//
const tabs = [
  // { name: "About", arabicName: "عنا", path: "/about" },
  { name: "Personal", arabicName: "التواصل", path: "#" },
  { name: "Business", arabicName: "الرئيسية", path: "#" },
  { name: "Corporate Sustainability", arabicName: "الرئيسية", path: "#" },
  { name: "Investor Relations", arabicName: "الرئيسية", path: "#" },
  { name: "CSR", arabicName: "الرئيسية", path: "#" },
];
//

const dropDownTabs = [
  { name: "manage my line", arabicName: "التواصل", path: "#" },
  { name: "manage my internet", arabicName: "الرئيسية", path: "#" },
  { name: "manage my mobile", arabicName: "الرئيسية", path: "#" },
];

const SmallScreensMenu = () => {
  const { menuStatus } = useSelector((state) => state.smallMenuSlice);
  const [selectedMenuItem, setSelectedMenuItem] = useState("personal");
  const [clickedName, setClickedName] = useState("");
  const [selectedSubName, setSelectedSubName] = useState("");
  const [subNameContaines, setSubNameContaines] = useState([]);

  const handleSelectedMenuItem = (e) => {
    setSelectedMenuItem(e.target.innerHTML);
  };

  const smallMenuSubTabs = smallMenuPersonalData
    .filter(({ name }) => name === clickedName)
    .map(({ subNames }, idx) => {
      if (subNames && subNames[0].subName !== "no") {
        return (
          <div key={idx} className={`w-full  `}>
            {subNames.map(({ subName, containes }, idx) => (
              <div
                className={`relative flex flex-col items-center justify-between  `}
                key={idx}
              >
                <p
                  className={` text-[16px] text-start bg-white py-2 ps-12 cursor-pointer w-full text-secondaryColor
                  } `}
                  onClick={(e) => {
                    setSelectedSubName(e.target.innerText);
                    setSubNameContaines(containes);
                  }}
                >
                  {subName}
                </p>
                {containes &&
                  containes.map((name, idx) => (
                    <p
                      key={idx}
                      className={` text-[15px] bg-stone-100 text-stone-500 text-start py-2 ps-[4.5rem]  cursor-pointer w-full
                    } `}
                    >
                      {name}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        );
      } else if (subNames && subNames[0].subName === "no") {
        return (
          <div key={idx} className={`w-full  `}>
            {subNames.map(({ subName, containes }, idx) => (
              <div
                className={`relative flex flex-col items-center justify-between py-3 `}
                key={idx}
              >
                {containes.map((name, idx) => (
                  <p
                    key={idx}
                    className={` text-[15px] bg-stone-100 text-stone-500 text-start py-2 ps-[4.5rem] cursor-pointer w-full `}
                  >
                    {name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        );
      } else return null;
    });

  const smallMenuTabsMap = smallMenuPersonalData.map(
    ({ name, arabicName, path, subNames, index }, idx) => (
      <div
        key={name}
        className={`min-w-fit  relative flex flex-col items-center justify-center  w-full `}
      >
        <Link
          className={` text-white ps-8 flex items-center justify-start  w-full h-full text-[16px]   `}
          to={path}
          onClick={(e) => {
            setSubNameContaines([]);
            setClickedName(e.target.innerText);
            if (subNames && subNames.length > 0) {
              setSelectedSubName(subNames[0].subName);
              setSubNameContaines(subNames[0].containes);
            }
          }}
        >
          {index === idx && clickedName === name ? (
            <GoTriangleDown className={`  text-white text-[20px] me-2`} />
          ) : (
            <GoTriangleRight
              className={` ${
                clickedName === name ? "hidden" : ""
              } text-white text-[20px] me-2`}
            />
          )}

          {name}
        </Link>
        {subNames && index === idx && clickedName === name ? (
          <div className={`w-full py-3 `}>{smallMenuSubTabs}</div>
        ) : null}
      </div>
    ),
  );

  return createPortal(
    <div
      className={` md:hidden transform ${
        menuStatus ? "visible translate-x-0 " : "invisible -translate-x-full "
      } z-[40]  duration-500 fixed bottom-0 w-screen h-[calc(100%-3rem)] flex items-center justify-center `}
    >
      <div
        className={`w-full relative overflow-y-auto self-end h-full p-6 bg-[#363636]  flex flex-col items-center justify-start  `}
      >
        <div className={`flex items-center  justify-center w-[95%] `}>
          <div
            className={` ${
              selectedMenuItem === "personal"
                ? "bg-secondaryColor"
                : "bg-inherit"
            }   cursor-pointer  rounded-s-sm w-full flex items-center justify-center space-x-2  py-[0.3rem] px-3 border border-white `}
            onClick={(e) => handleSelectedMenuItem(e)}
          >
            <p
              className={`text-[15px] w-full h-full  text-center text-white capitalize `}
            >{`personal`}</p>
          </div>
          <div
            className={` ${
              selectedMenuItem === "business"
                ? "bg-secondaryColor"
                : "bg-inherit"
            }   cursor-pointer rounded-e-sm  w-full flex items-center justify-center space-x-2  py-[0.3rem] px-3 border-y border-e border-white `}
            onClick={(e) => handleSelectedMenuItem(e)}
          >
            <p
              className={`text-[15px] w-full h-full text-center text-white capitalize `}
            >{`business`}</p>
          </div>
        </div>
        <div
          className={`  absolute top-[4rem] w-full flex flex-col items-center justify-center space-y-4 pt-4 `}
        >
          {smallMenuTabsMap}
        </div>
      </div>
    </div>,

    document.getElementById("smallMenu"),
  );
};

const BigScreensSearch = ({ smsearch, mdsearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      className={`h-full    flex items-center justify-start ${
        smsearch
          ? "absolute top-0 right-0  w-[calc(100%-3.5rem)] "
          : mdsearch
          ? "absolute top-0 right-20 w-[200px]"
          : "relative"
      }  `}
    >
      <input
        className={`${
          smsearch
            ? "h-full bg-white "
            : mdsearch
            ? "h-full bg-white"
            : "h-8 rounded-md bg-slate-50"
        }  w-full  placeholder:text-slate-600   text-[14px]   placeholder:text-[14px]  ps-3 px-1 focus:outline-none `}
        type="search"
        placeholder={`Search`}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <div
        className={` flex items-center justify-center  ${
          !smsearch && searchTerm && "hidden"
        } ${
          smsearch
            ? " h-[70%] my-auto right-4 border-l border-mainColor w-[3.5rem]  "
            : mdsearch
            ? "h-[40%] my-auto right-1 border-l border-mainColor w-[2.2rem]"
            : "right-0 w-[3.5rem]"
        } absolute  `}
      >
        <FaSearch
          className={`${
            smsearch ? "text-[20px] cursor-pointer " : "text-[17px]"
          }  text-mainColor  `}
          onClick={() => smsearch && dispatch(changeSerarchStatus())}
        />
      </div>
    </div>
  );
};

const Header = () => {
  const [hoverIdx, setHoverIdx] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const dropDownRef = useRef();
  // toolkit
  const dispatch = useDispatch();
  const { serarchStatus } = useSelector((state) => state.searchSlice);
  const { menuStatus } = useSelector((state) => state.smallMenuSlice);

  const outside = useDetectOutside(dropDownRef, "dropDown", "click");
  useLayoutEffect(() => {
    menuStatus
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [menuStatus]);
  const tabsMap = tabs.map(({ name, arabicName, path }, idx) => (
    <div
      key={idx}
      className={` ${
        idx === hoverIdx ? "bg-secondaryColor text-white " : "text-white"
      }  cursor-pointer flex items-center justify-center min-w-fit h-full duration-150   `}
      onClick={() => setHoverIdx(idx)}
    >
      <p
        className={`  text-[19px]   py-5 px-6  capitalize  duration-150 
            `}
      >
        {name}
      </p>
    </div>
  ));

  const dropDownTabsMap = dropDownTabs.map(
    ({ name, arabicName, path }, idx) => (
      <div
        key={idx}
        className={`cursor-pointer bg-secondaryColor py-1 px-2 rounded-md text-white   flex items-center justify-center w-full h-full duration-150   `}
        id="dropDown"
      >
        <p
          className={`  w-fit h-fit text-[17px]    capitalize  duration-150 
            `}
          id="dropDown"
        >
          {name}
        </p>
      </div>
    ),
  );

  return (
    <div
      className={`max-xl:fixed max-xl:top-0 max-xl:z-40 w-full shadow-sm shadow-stone-600/50 relative bg-white xl:bg-mainColor h-12  `}
      id="dropDown"
    >
      <SmallScreensMenu />
      <div
        className={`hidden xl:flex h-full myContainer   items-center justify-between    `}
        id="dropDown"
      >
        <div
          className={` h-full  flex items-center justify-center sm:space-x-3  `}
        >
          <div className={`flex h-full  items-center justify-center  `}>
            {tabsMap}
          </div>
        </div>
        <div
          className={`flex items-center justify-center space-x-8 h-full  `}
          id="dropDown"
        >
          <BigScreensSearch />
          <div
            className={` flex items-center justify-center space-x-3 `}
            id="dropDown"
          >
            <div
              className={`flex items-center justify-center  `}
              ref={dropDownRef}
              id="dropDown"
            >
              <p
                className={`text-[17px] text-blue-50 cursor-default capitalize me-2`}
                id="dropDown"
              >{`my we`}</p>
              <FaUserCircle
                className={`text-[28px] text-white `}
                id="dropDown"
              />
              <div className={`relative `} id="dropDown">
                <span id="dropDown">
                  {!outside ? (
                    <GoTriangleUp
                      className={`text-[22px] text-white cursor-pointer `}
                      id="dropDown"
                    />
                  ) : (
                    <GoTriangleDown
                      className={`  text-[22px] text-white cursor-pointer `}
                      id="dropDown"
                    />
                  )}
                </span>

                <div
                  className={`${
                    outside ? "hidden" : ""
                  } z-20 absolute top-[2.2rem] right-0 w-[350px] flex flex-col items-center justify-center p-7  space-y-3 bg-slate-50 `}
                  id="dropDown"
                >
                  {dropDownTabsMap}
                </div>
              </div>
              <div
                className={`h-8 w-8 mx-2 text-blue-50 text-[18px] flex items-start justify-center bg-secondaryColor rounded-sm `}
                id="dropDown"
              >
                ع
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* start non-xl-screens */}
      <div className={`h-full xl:hidden  flex items-center justify-between`}>
        <div className={`flex items-center justify-start h-full space-x-1 `}>
          <div
            className={`bg-mainColor flex items-center justify-center  h-full w-[3.5rem]`}
          >
            {!menuStatus && (
              <RxHamburgerMenu
                className="text-white text-[28px] w-full   px-3 cursor-pointer hover:text-yellow-200 active:text-yellow-200 duration-150 "
                onClick={() => dispatch(changeMenuStatus())}
              />
            )}
            {menuStatus && (
              <MdClose
                className="text-white text-[28px] w-full  px-3 cursor-pointer hover:text-yellow-200 active:text-yellow-200 duration-150 "
                onClick={() => dispatch(changeMenuStatus())}
              />
            )}
          </div>
          <div className={`flex items-center justify-start h-[90%] w-[9rem]`}>
            <img src={weLogo} alt="welogo" className={`object-cover `} />
          </div>
        </div>
        <div
          className={`flex items-center justify-center space-x-8 h-full  `}
          id="dropDown"
        >
          {serarchStatus && <BigScreensSearch smsearch={true} />}
          <div className={`max-md:hidden xl:hidden`}>
            <BigScreensSearch mdsearch={true} />
          </div>
          <div
            className={` flex items-center justify-center space-x-3 `}
            id="dropDown"
          >
            <div className={` md:hidden flex items-center justify-end  `}>
              <FaSearch
                className={`cursor-pointer text-[22px] text-mainColor `}
                onClick={() => dispatch(changeSerarchStatus())}
              />
            </div>
            <div
              className={`flex items-center justify-center   `}
              ref={dropDownRef}
              id="dropDown"
            >
              <FaUserCircle
                className={`text-[28px] cursor-pointer text-secondaryColor `}
                id="dropDown"
              />

              <div
                className={`${
                  outside ? "hidden" : ""
                } z-20 absolute top-[3rem] right-0  w-[400px] flex flex-col items-center justify-center border-[0.2px] border-slate-200 py-7 px-20  space-y-3 bg-white `}
                id="dropDown"
              >
                {dropDownTabsMap}
              </div>
              <div
                className={`h-8 w-8 mx-2 text-blue-50 text-[18px] flex items-start justify-center bg-secondaryColor rounded-sm `}
              >
                ع
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end non-xl-screens */}
    </div>
  );
};

export default Header;
