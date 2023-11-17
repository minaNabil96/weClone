import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import smallMenuSlice from "./reducers/smallMenuSlice";
import searchSlice from "./reducers/searchSlice";
export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    smallMenuSlice,
    searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});
