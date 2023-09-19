import { configureStore } from "@reduxjs/toolkit";
import cardState from "./slices/CardSlice";

export const store = configureStore({
  reducer: {
    cardState,
  },
});
