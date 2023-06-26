import { createSlice } from "@reduxjs/toolkit";
import {
  getCountry,
  getCredits,
  getDetailMovie,
  getGenres,
  getKeywords,
  getLanguages,
  getMovieList,
  getPopularMovie,
  getProviderMovie,
  getRecomendations,
  getReviews,
  getTrendingAll,
} from "./action";

export interface castState {
  profile_path: string;
  character: string;
  name: string;
}

export interface reviewState {
  author_details: { avatar_path: string };
  author: string;
  updated_at: string;
  content: string;
}

export interface recomendationState {
  backdrop_path: string;
  title: string;
  vote_average: string;
}

export interface keywordState {
  name: string;
}

export interface listMovieState {
  id: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  name: string;
  vote_average: string;
}

export interface languageState {
  english_name: string;
}
export interface providerState {
  logo_path: string;
  provider_name: string;
}

export interface popularState {
  id?: string;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average?: string;
  className?: string;
  classNameImg?: string;
  first_air_date?: string;
  name?: string;
}

export interface detailMovieState {
  runtime: string;
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
  genres: { name: string }[];
  vote_average: number;
  tagline: string;
  overview: string;
  status: string;
  original_language: string;
  budget: number;
  revenue: number;
}

interface movieState {
  loading: boolean;
  popular: popularState[] | null;
  providers: providerState[] | null;
  countries: languageState[] | null;
  genres: keywordState[] | null;
  languages: languageState[] | null;
  detailMovie: detailMovieState | null;
  listTrending: listMovieState[] | null;
  listMovie: listMovieState[] | null;
  cast: castState[] | null;
  reviews: reviewState[] | null;
  recomendations: recomendationState[] | null;
  keywords: keywordState[] | null;
}

const initialState = {
  popular: null,
  loading: false,
  providers: null,
  countries: null,
  genres: null,
  languages: null,
  detailMovie: null,
  listTrending: null,
  listMovie: null,
  cast: null,
  reviews: null,
  recomendations: null,
  keywords: null,
} as unknown as movieState;

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
      state.cast = action.payload.cast;
      state.loading = false;
    });
    builder.addCase(getCredits.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.loading = false;
    });
    builder.addCase(getReviews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRecomendations.fulfilled, (state, action) => {
      state.recomendations = action.payload;
      state.loading = false;
    });
    builder.addCase(getRecomendations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getKeywords.fulfilled, (state, action) => {
      state.keywords = action.payload;
      state.loading = false;
    });
    builder.addCase(getKeywords.pending, (state) => {
      state.loading = true;
    });
  },
});

export default movieSlice.reducer;
