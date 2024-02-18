import { configureStore } from "@reduxjs/toolkit";
import budgetSlice from "./budget-slice";

const store = configureStore({
  reducer: {
    budget: budgetSlice.reducer,
  },
});

export default store