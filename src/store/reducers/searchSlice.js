import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serarchStatus: false,
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    changeSerarchStatus: (state, action) => {
      state.serarchStatus = !state.serarchStatus;
    },
  },
});

export const { changeSerarchStatus } = searchSlice.actions;
export default searchSlice.reducer;
