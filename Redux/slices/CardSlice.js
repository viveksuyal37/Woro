import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const cardsSlice = createSlice({
  name: "cardState",
  initialState,
  reducers: {
    toggleCard: (state, action) => {
      const { cardId } = action.payload;
      state[cardId] = !state[cardId];
    },
    collapseAll: (state) => {
      Object.keys(state).forEach((cardId) => {
        state[cardId] = false;
      });
    },
  },
});

export const { toggleCard, collapseAll } = cardsSlice.actions;
export const getCardsState = (state) => state.cardState;
export const getCardStateById = (state) => state.cardState[cardId];

export default cardsSlice.reducer;
