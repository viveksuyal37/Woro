import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

const circularMenuSlice = createSlice({
  name: "circularMenuState",
  initialState,
  reducers: {
    toggleCircularMenu: (state, action) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleCircularMenu } = circularMenuSlice.actions;

export const getCircularMenuState = (state) => state.circularMenu;

export default circularMenuSlice.reducer;
