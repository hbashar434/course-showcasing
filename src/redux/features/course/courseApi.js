import baseApi from "../api/baseApi";

const courseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => "/api/courses",
    }),
    getCourse: builder.query({
      query: (id) => `/api/courses/${id}`,
    }),
  }),
});

export const { useGetAllCoursesQuery, useGetCourseQuery } = courseApi;
