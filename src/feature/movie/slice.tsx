/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import {
  getCountry,
  getCredits,
  getDetailMovie,
  getGenres,
  getLanguages,
  getMovieList,
  getPopularMovie,
  getProviderMovie,
  getTrendingAll,
} from "./action";

const initialState = {
  popular: [],
  loading: false,
  providers: null,
  countries: null,
  genres: null,
  languages: null,
  detailMovie: null,
  listTrending: null,
  listMovie: null,
  tvLatest: null,
  credits: null,
} as any;

const movieSlice = createSlice({
  name: "movie",
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
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.loading = false;
    });
    builder.addCase(getGenres.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.languages = action.payload;
      state.loading = false;
    });
    builder.addCase(getLanguages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetailMovie.fulfilled, (state, action) => {
      state.detailMovie = action.payload;
      state.loading = false;
    });
    builder.addCase(getDetailMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTrendingAll.fulfilled, (state, action) => {
      state.listTrending = action.payload;
      state.loading = false;
    });
    builder.addCase(getTrendingAll.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovieList.fulfilled, (state, action) => {
      state.listMovie = action.payload;
      state.loading = false;
    });
    builder.addCase(getMovieList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCredits.fulfilled, (state, action) => {
      state.credits = action.payload;
      state.loading = false;
    });
    builder.addCase(getCredits.pending, (state) => {
      state.loading = true;
    });
  },
});

export default movieSlice.reducer;
