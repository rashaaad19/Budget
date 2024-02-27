import { createSlice } from "@reduxjs/toolkit";
const budgetSlice = createSlice({
  initialState: {
    items: [
      {
        id: 15,
        name: "Clothes",
        price: 150.45,
        type: "expenses",
        date: "24 April 2024",
      },
      {
        id: 242,
        name: "Salary",
        price: 2300,
        type: "income",
        date: "15 April 2024",
      },
      {
        id: 351,
        name: "Travel",
        price: 500,
        type: "expenses",
        date: "3 April 2024",
      },
      {
        id: 280,
        name: "Rent",
        price: 1500,
        type: "income",
        date: "10 May 2024",
      },
    ],
    currentFilter: "all",
    filteredItems: [],
    total: 0,
  },
  name: "money",
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const duplicate = state.items.find((item) => newItem.id === item.id);
      if (duplicate) {
        return;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: Number(newItem.price),
          type: newItem.type,
          date: newItem.date,
        });
        // Recalculate filteredItems based on current filter (if available)
        if (state.currentFilter !== "all") {
          state.filteredItems = state.items.filter(
            (item) => item.type === state.currentFilter
          );
        } else {
          // If no current filter, reset filteredItems to the original items
          state.filteredItems = state.items.slice();
        }
      }
    },
    deleteItem(state, action) {
      state.items = state.items.filter(
        (element) => element.id !== action.payload
      );
      state.filteredItems = state.filteredItems.filter(
        (element) => element.id !== action.payload
      );
    },
    editItem(state, action) {
      const editedExpense = action.payload;
      const selectedExpense = state.items.find(
        (element) => element.id === editedExpense
      );
      if (selectedExpense) {
        selectedExpense.id = 4213;
      }
    },
    toggleFilter(state, action) {
      const newFilter = action.payload;
      state.currentFilter = newFilter;
    },
    filterItems(state, action) {
      const itemType = action.payload;
      const filteredData = state.items.filter((item) => item.type === itemType);
      state.filteredItems = filteredData;
    },
  },
});

export const budgetActions = budgetSlice.actions;
export default budgetSlice;
