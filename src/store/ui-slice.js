import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  initialState: { current: "all", showModal: false, formType: "expenses" },
  name: "ui",
  reducers: {
    changeCategory(state, action) {
      state.current = action.payload;
    },

    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    toggleFormType(state) {
      if (state.formType === "expenses") {
        state.formType = "income";
      }
      else if (state.formType === "income") {
        state.formType = "expenses";
      } 
      else return;

    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
