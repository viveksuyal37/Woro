import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
  itemSelected: false,
};

const circularMenuSlice = createSlice({
  name: "circularMenuState",
  initialState,
  reducers: {
    toggleCircularMenu: (state, action) => {
      state.isVisible = !state.isVisible;
    },
    setSelectedItem: (state, action) => {
      state.itemSelected = action.payload?.selectedItem || false;
    },
    clearSelection: (state, action) => {
      state.itemSelected = false;
    },
  },
});

export const { toggleCircularMenu, setSelectedItem, clearSelection } =
  circularMenuSlice.actions;

export const getCircularMenuState = (state) => state.circularMenu;

export default circularMenuSlice.reducer;
