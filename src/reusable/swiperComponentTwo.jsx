import React, { useEffect, useState, useRef } from "react";
import { register } from "swiper/element/bundle";
import servicesDatabase from "../assets/servicesDatabase.json";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import useDetectOutside from "../reusable/useDetectOutSide";
// import {Link} from "react-router"
// Register Swiper web component
const SwiperComponentTwo = () => {
  const [loaded, setLoaded] = useState(false);
  const [hoverd, setHoverd] = useState(false);
  const [hoverdIdx, setHoverdIdx] = useState(null);
  const swiperRef = useRef(null);
  const imagesRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // const outside = useDetectOutside(swiperRef, "swiperHoverd", "mouseenter");
  // images loading fun
  const imagesHandler = () => {
    setLoaded(true);
  };
  const dataMap =
    servicesDatabase &&
    servicesDatabase.map(({ id, title, image, text }, idx) => (
      <swiper-slide key={idx}>
        <div
          className={` cursor-pointer max-sm:h-[300px] h-[350px] w-full rounded-2xl relative flex items-center justify-center  `}
          ref={imagesRef}
          onMouseEnter={() => {
            setHoverdIdx(id);
            setHoverd(true);
          }}
          onMouseLeave={() => setHoverd(false)}
        >
          {image && image.includes("www") && (
            <img
              src={image}
              alt={title}
              className={` h-full w-full object-cover rounded-2xl   ${
                loaded ? "" : "invisible"
              } `}
              onLoad={() => imagesHandler()}
            />
          )}
          <div
            className={`h-full w-full  object-cover  bg-mainColor  ${
              loaded ? "hidden" : ""
            } `}
          ></div>

          <div
            className={`h-full w-full absolute  bg-secondaryColor/80 rounded-2xl duration-500 ${
              hoverd && id === hoverdIdx
                ? "visible opacity-100"
                : "invisible opacity-0"
            } z-20 flex flex-col items-center justify-center  `}
          >
            <h2 className={`text-[24px] text-white font-semibold `}>{title}</h2>
            <p className={`text-[20px] text-white text-center max-w-[90%] `}>
              {text}
            </p>
            <button
              type="button"
              className={`  flex items-center justify-center mt-4 bg-secondaryColor rounded-sm py-2 w-40 shadow-sm shadow-slate-600/70  `}
            >
              <span
                className={`text-blue-50 text-[17px] capitalize `}
              >{`learn more`}</span>
            </button>
          </div>
        </div>
      </swiper-slide>
    ));
  useEffect(() => {
    // Object with parameters
    const params = {
      // slidesPerView: 3,
      // spaceBetween: 40,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        550: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        880: {
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        1140: {
          slidesPerView: 2.5,
          spaceBetween: 40,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 40,
        },

        // 1024: {
        //   slidesPerView: 3,
        //   spaceBetween: 20,
        // },
        // 1280: {
        //   slidesPerView: 4,
        //   spaceBetween: 20,
        // },
      },
      // centeredSlides: true,
      // centeredSlidesBounds: true,
      // pagination: {
      //   type: "bullets",
      // },
      // autoplay: {
      //   delay: 3000,
      // },
      // effect: "fade",
      // fadeEffect: {
      //   crossFade: true,
      // },
      rewind: true,
      direction: "horizontal",

      // navigation: true,

      on: {
        beforeInit: (swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          // swiper.hostEl.style.position = "relative";
          // swiper.hostEl.style.maxWidth = "100vw";
        },
        // init: (swiper) => {
        //   // swiper.classNames.push("relative");
        //   console.log(swiper);
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
          width: "90%",
        }}
        init="false"
        ref={swiperRef}
      >
        {dataMap}
      </swiper-container>

      <div
        ref={navigationPrevRef}
        className={` max-sm:hidden absolute top-1/2 left-0 transform  -translate-y-1/2 z-20  w-fit h-fit flex items-center justify-center `}
      >
        <MdArrowBackIos className={`text-[40px]   text-mainColor  `} />
      </div>
      <div
        ref={navigationNextRef}
        className={`max-sm:hidden absolute top-1/2 right-0  transform  -translate-y-1/2 z-20  w-fit h-fit flex items-center justify-center  `}
      >
        <MdArrowForwardIos className={`text-[40px]  text-mainColor  `} />
      </div>
    </div>
  );
};

export default SwiperComponentTwo;
