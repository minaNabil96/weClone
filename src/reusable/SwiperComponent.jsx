import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import mainswiperdata from "../assets/mainswiperdata.json";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import useDetectOutside from "../reusable/useDetectOutSide";
// Register Swiper web component
const SwiperComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const [bulletsSize, setBulletsSize] = useState(null);
  const swiperRef = useRef(null);
  const imagesRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // const outside = useDetectOutside(swiperRef, "swiperHoverd", "mouseenter");
  // images loading fun
  const screenSize = window.innerWidth;

  useEffect(() => {
    if (screenSize < 640) {
      setBulletsSize("10px");
    } else if (screenSize > 640 && screenSize < 1024) {
      setBulletsSize("15px");
    } else {
      setBulletsSize("17.5px");
    }
  }, [screenSize]);

  const imagesHandler = () => {
    setLoaded(true);
  };
  const dataMap =
    mainswiperdata &&
    mainswiperdata.map(({ id, title, image }, idx) => (
      <swiper-slide key={idx}>
        <div
          className={`${
            image === "yellow"
              ? "bg-yellow-400"
              : image === "green"
              ? "bg-green-400"
              : image === "red"
              ? "bg-red-400"
              : image === "blue"
              ? "bg-blue-400"
              : image === "purple"
              ? "bg-purple-400"
              : "bg-slate-50"
          } min-h-fit max-xl:pt-12 min-w-screen relative flex items-end justify-start max-sm:items-center max-sm:justify-center  `}
          ref={imagesRef}
        >
          {image && image.includes("www") && (
            <img
              src={image}
              alt={title}
              className={`w-full h-fit object-fill  ${
                loaded ? "" : "invisible"
              } `}
              onLoad={() => imagesHandler()}
            />
          )}
          <div
            className={`w-full h-full object-cover absolute bg-mainColor  ${
              loaded ? "hidden" : ""
            } `}
          ></div>
          {/* <h1 */}
          {/*   className={`z-10 text-[30px] max-sm:text-[25px] text-white capitalize max-sm:w-[340px] w-[550px]   sm:p-10 max-sm:text-center  `} */}
          {/* > */}
          {/*   {title} */}
          {/* </h1> */}
        </div>
      </swiper-slide>
    ));
  useEffect(() => {
    // Object with parameters
    const params = {
      slidesPerView: 1,
      pagination: {
        type: "bullets",
        clickable: true,
      },
      autoplay: {
        delay: 6000,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      loop: true,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      on: {
        beforeInit: (swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          // swiper.hostEl.style.position = "relative";
          // swiper.hostEl.style.maxWidth = "100vw";
        },
        // init: (swiper) => {
        //   console.log(swiper.params.pagination);
        // },
        slideChange: (swiper) => {
          swiper.autoplay.resume();
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);
  return (
    <div className={`relative`}>
      <swiper-container
        style={{
          "--swiper-pagination-color": "#92278f",
          "--swiper-pagination-bullet-size": bulletsSize,
          "--swiper-pagination-bullet-inactive-opacity": "0.3",
          "--swiper-pagination-bullet-inactive-color": "#000",
        }}
        init="false"
        ref={swiperRef}
      >
        {dataMap}
      </swiper-container>

      <div
        className={` hover:opacity-100 opacity-0 max-xl:hidden h-[400px]  duration-300 flex items-center justify-between  myContainer max-sm:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full  `}
      >
        <div
          ref={navigationPrevRef}
          className={`   w-fit h-fit flex items-center justify-center `}
        >
          <MdArrowBackIos
            className={`text-[55px] font-extrabold  text-slate-200  `}
          />
        </div>
        <div
          ref={navigationNextRef}
          className={`  w-fit h-fit flex items-center justify-center `}
        >
          <MdArrowForwardIos
            className={`text-[55px] font-extrabold text-slate-200  `}
          />
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;
