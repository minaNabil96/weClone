import React from "react";

const weLogo = `https://www.te.eg/wps/wcm/connect/481e7561-26df-4499-88cf-6656b1d4447c/5/WE+Bonus+logo+homepage+copy.png?MOD=AJPERES&CACHEID=481e7561-26df-4499-88cf-6656b1d4447c/5`;

const Points = () => {
  return (
    <div className={`flex items-center justify-center pb-12`}>
      <div className={`myContainer w-full `}>
        <div className={`flex items-center justify-start space-x-1 pb-4 `}>
          <h4 className={`text-[26px] text-mainColor capitalize`}>we</h4>
          <span
            className={`text-[24px] text-mainColor font-semibold capitalize `}
          >
            POINTS & VOUCHERS
          </span>
        </div>
        <div
          className={` flex   items-center justify-between w-full max-md:h-[550px] md:h-[350px]  lg:h-[550px] rounded-2xl `}
          style={{
            backgroundImage: "url(https://www.te.eg/images/we-bouns-bg-en.png)",
            backgroundSize: "cover",
          }}
        >
          <div
            className={` max-lg:w-full max-lg:h-full h-[90%] flex max-md:flex-col items-start  max-lg:p-5 p-4 justify-between  w-[90%] mx-auto`}
          >
            <div
              className={`  flex flex-col items-start justify-start  space-y-12 `}
            >
              <img
                src={weLogo}
                alt="weLogo"
                className={`w-[130px] md:w-[160px] object-cover`}
              />
              <p
                className={`text-blue-50 max-lg:text-[21px]  text-[25px] max-w-[80%]`}
              >
                <strong>Earn</strong> and <strong>Redeem</strong> {""}
                your points together with Exclusive vouchers and gifts from WE
                Partners
              </p>
              <button
                type="button"
                className={`  flex items-center justify-center mt-4 bg-mainColor rounded-lg py-2 w-36 shadow-sm shadow-slate-600/70  `}
              >
                <span
                  className={`text-blue-50 text-[16px] capitalize `}
                >{`learn more`}</span>
              </button>
            </div>
            <div
              className={` max-lg:self-end max-lg:w-[60%]  w-[90%] h-[90%] `}
              style={{
                backgroundImage:
                  "url(https://www.te.eg/images/we-bouns-obj-en.png)",
                backgroundSize: "contain",
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
