import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./reducers/CounterSlice";
import CategorySlice from "./reducers/CategorySlice";
export const store = configureStore({
  reducer: {
    MyCounter: CounterSlice,
    Category: CategorySlice,
  },
});
