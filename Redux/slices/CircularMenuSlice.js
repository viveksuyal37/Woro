import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
  itemSelected: false,
  selectedPlatforms: false,
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
    setSelectedPlatforms: (state, action) => {
      state.selectedPlatforms = action.payload?.platforms || false;
    },
    clearSelectedPlatforms: (state, action) => {
      state.selectedPlatforms = false;
    },
  },
});

export const {
  toggleCircularMenu,
  setSelectedItem,
  clearSelection,
  setSelectedPlatforms,
  clearSelectedPlatforms
} = circularMenuSlice.actions;

export const getCircularMenuState = (state) => state.circularMenu;

export default circularMenuSlice.reducer;
