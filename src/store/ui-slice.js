import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  initialState: {
    showModal: false,
    modalType: "",
    dataType: "expenses",
    formType: "add",
  },
  name: "ui",
  reducers: {
    changeCategory(state, action) {
      state.category = action.payload;
    },
    toggleModalType(state, action) {
      const newModalType = action.payload;
      state.modalType = newModalType;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    toggleDataType(state) {
      if (state.dataType === "expenses") {
        state.dataType = "income";
      } else if (state.dataType === "income") {
        state.dataType = "expenses";
      }
    },
    toggleFormType(state, action) {
      const newFormType = action.payload;
      state.formType = newFormType;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice;
