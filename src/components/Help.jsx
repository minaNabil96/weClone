import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
	GoTriangleDown,
	GoTriangleUp,
	GoTriangleLeft,
	GoTriangleRight,
} from "react-icons/go";

const elements = [
	{
		id: 1,
		el: "https://www.te.eg/images/icon-dotmasr.png",
		title: "Dot Masr",
	},
	{
		id: 2,
		el: (
			<svg
				version="1"
				xmlns="http://www.w3.org/2000/svg"
				fill="white"
				width="128"
				height="128"
				viewBox="-7 -8 90 90"
			>
				<path d="M72.59 42.644c-3.73.322-7.47 1.16-11.227.87-1.027-1.394-1.05-3.183-1.372-4.81-7.4.75-14.46 3.158-21.65 4.97-3.35-12.002-7.38-23.814-10.64-35.84 2.64-.282 5.28-.58 7.94-.813 2.01 10.15 4.34 20.22 6.37 30.36 2.2-.6 4.4-1.22 6.59-1.87-2.21-3.9-5.94-7.63-5.62-12.4 1.22-4.64 6.94-4.69 10.62-6.25.58 2.1 1.15 4.18 1.72 6.28-2.41.63-6.43.01-7.04 3.28.73 2.97 2.6 5.45 4.09 8.06 2.36-.36 4.7-.71 7.05-1.08.28-2.12-.67-5.87 2.27-6.27 3.43-.51 6.9-.64 10.34-1.05-2.3-7.07-6.57-13.56-12.54-18.03-8.24-6.41-19.4-8.88-29.52-6.4-9.95 2.19-18.68 9.09-23.41 18.1-4.35 8.02-5.07 17.6-2.99 26.4 6.17-1.26 12.25-2.93 18.43-4.2 1.33-.49 3.34-.33 3.94-1.93.09-2.13-.91-4.08-1.7-5.98-2.76-5.9-5.65-11.74-8.5-17.59 2.04-1.95 4.04-3.94 6.1-5.88 3.22 9.01 6.61 17.95 9.93 26.91.67 2.11 1.53 4.42.8 6.62-.59 2.03-2.94 2.33-4.61 3.03-7.37 2.37-14.71 4.9-22.11 7.19-2.19.9-4.09-.8-5.82-1.89 1.15 1.97 2 4.63 4.43 5.34 1.5.53 3.12-.55 4.59-.05 1.84 1.76 3.3 3.87 5.23 5.53C24.91 73.29 42 75.18 54.74 68.16c8.45-4.44 14.605-12.53 17.462-21.59 1-.41 2.26-.44 3.025-1.307.41-1.46.53-2.99.78-4.48-1.006.85-1.98 1.93-3.41 1.9zM15.792 28.49c.706.716 1.412 1.433 2.118 2.158-1.388.072-2.776.153-4.156.233.778 1.6 1.613 3.18 2.455 4.74 1.14-.43 2.27-.88 3.41-1.32.46.9.93 1.79 1.4 2.69-3.13 1.13-6.26 2.24-9.41 3.34-.41-.87-.82-1.73-1.23-2.59 1.18-.46 2.35-.92 3.53-1.39-1.15-1.89-2.3-3.78-3.38-5.71.31-.34.94-1.03 1.27-1.37 1.32-.25 2.64-.5 3.97-.76zm34.906 27.3c-1.813 4.07-.128 10.095-4.75 12.496-6.042 2.24-12.92-3.062-13.505-9.24.57-.09 1.71-.258 2.278-.34.79 2.338 3.26 5.495 5.86 3.296 1.87-2.48-1.15-4.922-2.42-6.912-1.15.822-2.31 1.65-3.46 2.48-.61-.65-1.22-1.304-1.81-1.965 1.89-1.49 3.82-2.924 5.86-4.197 1.04 1.023 2.07 2.047 3.08 3.07-.45-1.258-.91-2.515-1.38-3.77-1.48.04-2.97.08-4.46.11-.02-.966-.52-2.73 1.64-3.147 2.24-.05 2.82.16 5.07.23.66 1.97 1.29 3.94 1.99 5.9.15-1.33.39-2.65.39-3.98-.72-1.46-1.86-2.65-2.66-4.05.32-.57.97-1.73 1.29-2.31 1.61 1.66 3.51 3.27 4.25 5.53.11 2.21-.25 4.41-.39 6.61 1.73-2.25 1.95-5.02 1.5-7.76.54-.21 1.63-.64 2.18-.86.76 2.95.88 6.06-.49 8.85zM29.36 8.51c1.983 8.202 4.503 16.273 7.04 24.314-1.213-6.26-2.818-12.438-4.254-18.65-.538-2.055-.794-4.43-2.785-5.663zm-7.188 19.214c-1.035-4.237-2.15-8.797-5.056-12.172.97 4.317 3.154 8.217 5.056 12.172z"></path>
			</svg>
		),
		title: "Ma3ak",
	},
	{ id: 3, el: "https://www.te.eg/images/icon-faq.png", title: "FAQ" },
	{
		id: 4,
		el: "https://www.te.eg/images/store-locator.png",
		title: "Store Locator",
	},
];

const elementsMap = elements.map(({ el, id, title }) => (
	<div
		key={id}
		className={`flex flex-col items-center justify-center cursor-pointer w-full h-[235px] rounded-2xl bg-mainColor `}
	>
		{id !== 2 ? (
			<img src={el} alt="helpimg" className={`w-[128px] h-[128px]`} />
		) : (
			el
		)}
		<p className={`text-white text-[25px] font-semibold text-center`}>
			{title}
		</p>
	</div>
));

const Help = () => {
	return (
		<div className={`flex items-center justify-center py-10`}>
			<div className={`myContainer w-full `}>
				<div
					className={`  flex items-center justify-start space-x-1 pb-6 `}
				>
					<h4 className={`text-[26px] text-mainColor capitalize`}>
						help
					</h4>
					<span
						className={`text-[24px] text-mainColor font-semibold capitalize `}
					>
						AND SUPPORT
					</span>
				</div>
				<div
					className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  `}
				>
					{elementsMap}
				</div>
				<button
					type="button"
					className={` mx-auto  flex items-center justify-center  bg-secondaryColor hover:bg-mainColor duration-150 rounded-md py-2 mt-8 w-48 shadow-sm shadow-slate-600/70  `}
				>
					<span
						className={`text-blue-50  text-[17px] capitalize   `}
					>{`More Details`}</span>
				</button>
			</div>
		</div>
	);
};

export default Help;
