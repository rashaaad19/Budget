import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "./budget-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    budget: budgetSlice.reducer,
    ui:uiSlice.reducer
  },
});

export default store