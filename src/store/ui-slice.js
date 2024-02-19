import { createSlice } from "@reduxjs/toolkit";

const uiSlice=createSlice({
  initialState: { current: "all" },
  name:'ui',
  reducers: {
    changeCategory(state, action) {
      state.current = action.payload;
    },
  },
});
export const uiActions=uiSlice.actions
export default uiSlice
