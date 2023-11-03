import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "courseSlice",
  initialState,
  reducers: {},
});

export default courseSlice.reducer;
