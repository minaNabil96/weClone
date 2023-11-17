import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuStatus: false,
};

export const smallMenuSlice = createSlice({
  name: "smallMenuSlice",
  initialState,
  reducers: {
    changeMenuStatus: (state, action) => {
      state.menuStatus = !state.menuStatus;
    },
  },
});

export const { changeMenuStatus } = smallMenuSlice.actions;
export default smallMenuSlice.reducer;
