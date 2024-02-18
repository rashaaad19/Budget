import { createSlice } from "@reduxjs/toolkit";
const budgetSlice = createSlice({
  initialState: {
    expenses: [],
    income: [],
    total: 0,
  },
  name: "money",
  reducers: {
    addExpense(state, action) {
      const newItem = action.payload;
      state.expenses.push({
        id: newItem.id,
        name: newItem.name,
        amount: newItem.amount,
      });
    },
    deleteExpense(state, action) {
      state.expenses = state.expenses.filter(
        (element) => element.id !== action.payload
      );
    },
    editExpense(state, action) {
      const editedExpense = action.payload
      const selectedExpense = state.expenses.find(
        (element) => element.id === editedExpense
      )
      if(selectedExpense){
        selectedExpense.id=4213
      }
    },
  },
});
export const budgetActions = budgetSlice.actions;
export default budgetSlice;
