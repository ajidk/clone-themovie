import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  trending: string;
}

const initialState: CounterState = {
  value: 0,
  trending: "",
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
    updateStatus: (state, action: PayloadAction<string>) => {
      state.trending = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, updateStatus } =
  generalSlice.actions;

export default generalSlice.reducer;
