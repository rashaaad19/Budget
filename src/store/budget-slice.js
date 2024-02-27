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
    selectedItem:null,
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
    setSelectedItem(state,action){
      const selectedItemId=action.payload
      state.selectedItem=selectedItemId
    },
    editItem(state, action) {
      const  editedItem = action.payload;
      const index = state.items.findIndex((item) => item.id === state.selectedItem);
      console.log(state.selectedItem)
      if (index !== -1) {
        // Update the item at the specific index
        state.items[index] = {
          ...state.items[index],
          ...editedItem,
        };

        // Update filteredItems if necessary
        if (state.currentFilter !== "all") {
          state.filteredItems = state.items.filter(
            (item) => item.type === state.currentFilter
          );
        } else {
          state.filteredItems = state.items.slice();
        }
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
