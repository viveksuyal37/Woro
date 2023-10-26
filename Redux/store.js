import { configureStore } from "@reduxjs/toolkit";
import cardState from "./slices/CardSlice";
import circularMenu from "./slices/CircularMenuSlice";

export const store = configureStore({
  reducer: {
    cardState,
    circularMenu,
  },
});
