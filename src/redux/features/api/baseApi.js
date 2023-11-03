import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://course-management-inky.vercel.app",
  }),
  endpoints: () => ({}),
});

export default baseApi;
