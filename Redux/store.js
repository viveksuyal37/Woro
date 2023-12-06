import { configureStore } from '@reduxjs/toolkit';
import cardState from './slices/CardSlice';
import circularMenu from './slices/CircularMenuSlice';
import dashboardDrawer from './slices/LeftDashboardDrawerSlice';

export const store = configureStore({
  reducer: {
    cardState,
    circularMenu,
    dashboardDrawer,
  },
});
