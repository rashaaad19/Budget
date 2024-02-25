import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  initialState: { category: "all", showModal: false, dataType: "expenses" },
  name: "ui",
  reducers: {
    changeCategory(state, action) {
      state.category = action.payload;
    },

    toggleModal(state, action) {
      state.showModal = !state.showModal;
    },
    toggleDataType(state) {
      if (state.dataType === "expenses") {
        state.dataType = "income";
      } else if (state.dataType === "income") {
        state.dataType = "expenses";
      } else return;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
