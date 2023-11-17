import React, { useState, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { PiWarningBold } from "react-icons/pi";
import SubHeader from "./SubHeader";
const Landing = () => {
	const [note, setNote] = useState({ status: false, showed: false });
	const skitterRef = useRef();

	useLayoutEffect(() => {
		if (note.status === false && note.showed === false) {
			setTimeout(() => {
				setNote((prev) => ({ ...prev, status: true, showed: true }));
			}, 8000);
		} else return;
	}, [note.status, note.showed]);

	const noteHandler = () => {
		if (note.status === true && note.showed === true) {
			setNote((prev) => ({ ...prev, status: false }));
		}
	};
	const NoteModal = () => {
		return createPortal(
			<div
				className={` z-50 fixed w-screen h-screen flex items-center justify-center bg-black/70 `}
			>
				<div
					className={`w-[300px] lg:w-[450px] min-h-[200px] p-2 bg-white rounded-md flex flex-col items-center justify-center space-y-4 shadow-sm shadow-slate-700/50 border border-mainColor `}
				>
					<PiWarningBold className={`text-yellow-600 text-[25px]`} />

					<h2
						className={`text-[17px] text-slate-900 w-[90%] text-center `}
					>
						{`please note that it's not telecom egypt's official website, it's just an attempt to remake its landing. made by: mina nabil`}
					</h2>
					<button
						type="button"
						className={`w-[60px] min-h-[20px] bg-secondaryColor hover:bg-mainColor duration-150 rounded-md text-white shadow-sm shadow-slate-300 text-[17px] p-1 `}
						onClick={() => noteHandler()}
					>
						ok
					</button>
				</div>
			</div>,

			document.getElementById("note"),
		);
	};

	return (
		<div className={`   `}>
			{/* <div className={`   w-full h-10 z-40`}> */}
			{/* 	<SubHeader /> */}
			{/* </div> */}

			{note.status === true && note.showed === true && <NoteModal />}
		</div>
	);
};

export default Landing;
