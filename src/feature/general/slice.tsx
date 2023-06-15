import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  trending: string;
  popular: string;
  watch: string;
  trailer: string;
}

const initialState: CounterState = {
  value: 0,
  trending: "",
  popular: "",
  watch: "",
  trailer: "",
};

export const generalSlice = createSlice({
  name: "general",

  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    updateTrending: (state, action: PayloadAction<string>) => {
      state.trending = action.payload;
    },
    updatePopular: (state, action: PayloadAction<string>) => {
      state.popular = action.payload;
    },
    updateWatch: (state, action: PayloadAction<string>) => {
      state.watch = action.payload;
    },
    updateTrailer: (state, action: PayloadAction<string>) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  updateTrending,
  updatePopular,
  updateWatch,
  updateTrailer,
} = generalSlice.actions;

export default generalSlice.reducer;
