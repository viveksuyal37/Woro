import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
  itemSelected: false,
  selectedPlatforms: false,
  schedulePosts: false,
  success: false,
};

const circularMenuSlice = createSlice({
  name: 'circularMenuState',
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
    clearMenuState: (state, action) => {
      state.isVisible = false;
      state.itemSelected = false;
      state.selectedPlatforms = false;
      state.success = false;
      state.schedulePosts = false;
    },
    savePostsChanges: (state, action) => {
      state.schedulePosts = true;
    },
    confirmPostsScheduling: (state, action) => {
      state.success = true;
    },
  },
});

export const {
  toggleCircularMenu,
  setSelectedItem,
  clearSelection,
  setSelectedPlatforms,
  clearSelectedPlatforms,
  clearMenuState,
  savePostsChanges,
  confirmPostsScheduling,
} = circularMenuSlice.actions;

export const getCircularMenuState = (state) => state.circularMenu;

export default circularMenuSlice.reducer;
