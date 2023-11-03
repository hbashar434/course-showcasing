import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://course-management-server-6bne.onrender.com",
  }),
  endpoints: () => ({}),
});

export default baseApi;
