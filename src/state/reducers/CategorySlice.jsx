import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: [
    { id: 1, name: "item1", price: 1237 },
    { id: 2, name: "item2", price: 1291 },
    { id: 3, name: "item3", price: 1332 },
    { id: 4, name: "item4", price: 1571 },
  ],
};

const CategorySlice = createSlice({
  name: "Category",
  initialState,
  reducers: {
    ADD_ITEM: (state, action) => {
      state.category.push(action.payload);
    },
    REMOVE_ITEM: (state, action) => {
      state.category = state.category.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export const { ADD_ITEM, REMOVE_ITEM } = CategorySlice.actions;
export default CategorySlice.reducer;
