import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  initialState: { current: "all", showModal: false },
  name: "ui",
  reducers: {
    changeCategory(state, action) {
      state.current = action.payload;
    },

    toggleModal(state) {
      state.showModal = !state.showModal;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
