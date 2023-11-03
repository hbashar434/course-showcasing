import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import courseSlice from "./features/course/courseSlice";
export const store = configureStore({
  reducer: {
    course: courseSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
