import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import courseSlice from "./features/course/courseSlice";
import searchSlice from "./features/course/searchSlice";
export const store = configureStore({
  reducer: {
    course: courseSlice,
    search: searchSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
