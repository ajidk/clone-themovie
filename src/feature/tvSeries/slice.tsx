/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { getListSeries } from "./action";

const initialState = {
  loading: false,
  listSeries: null,
} as any;

const tvSeriesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListSeries.fulfilled, (state, action) => {
      state.listSeries = action.payload;
      state.loading = false;
    });
    builder.addCase(getListSeries.pending, (state) => {
      state.loading = true;
    });
  },
});

export default tvSeriesSlice.reducer;
