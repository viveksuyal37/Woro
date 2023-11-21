import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visibility: false,
};

const dashboardDrawerSlice = createSlice({
  name: 'dashboardDrawerState',
  initialState,
  reducers: {
    moveDrawer: (state, action) => {
      return {
        ...state,
        visibility: action.payload.visibility,
      };
    },
  },
});

export const { moveDrawer } = dashboardDrawerSlice.actions;

export const getDrawerVisibility = (state) => state.dashboardDrawer;

export default dashboardDrawerSlice.reducer;
