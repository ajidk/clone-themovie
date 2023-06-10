/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
// import { UsersState } from "../../utils/interface/jadwal";
import { getCountry, getPopularMovie, getProviderMovie } from "./action";

const initialState = {
  popular: [],
  loading: false,
  providers: null,
  countries: null,
} as any;

const movieSlice = createSlice({
  name: "solat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPopularMovie.fulfilled, (state, action) => {
      state.popular = action.payload;
      state.loading = false;
    });
    builder.addCase(getPopularMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProviderMovie.fulfilled, (state, action) => {
      state.providers = action.payload;
      state.loading = false;
    });
    builder.addCase(getProviderMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.countries = action.payload;
      state.loading = false;
    });
    builder.addCase(getCountry.pending, (state) => {
      state.loading = true;
    });
  },
});

export default movieSlice.reducer;
