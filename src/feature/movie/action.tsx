/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import connection from "../../config/connection";
import {
  castState,
  keywordState,
  recomendationState,
  reviewState,
} from "./slice";

interface movieState {
  movie_id: string;
}

export const getPopularMovie = createAsyncThunk(
  "movie/list-popular",
  async (_, { rejectWithValue }) => {
    try {
      const res = await connection.get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
      );

      const messages = "something went wrong";
      if (res.status != 200) {
        throw new Error(messages);
      }

      return res.data;
      //   return data;
    } catch (e: any) {
      console.log("Error", e);
      return rejectWithValue(e.res.data);
    }
  }
);

export const getProviderMovie = createAsyncThunk(
  "movie/movie-providers",
  async (_, { rejectWithValue }) => {
    try {
      const res: any = await connection.get(
        `watch/providers/movie?language=en-US`
      );

      const messages = "something went wrong";
      if (res.status != 200) {
        throw new Error(messages);
      }

      return res.data.results;
      //   return data;
    } catch (e: any) {
      console.log("Error", e);
      return rejectWithValue(e.res.data);
    }
  }
);

export const getCountry = createAsyncThunk(
  "movie/countries",
  async (_, { rejectWithValue }) => {
    try {
      const res: any = await connection.get(
        `configuration/countries?language=en-US`
      );

      const messages = "something went wrong";
      if (res.status != 200) {
        throw new Error(messages);
      }
      // console.log(res.data);

      return res.data;
    } catch (e: any) {
      console.log("Error", e);
      return rejectWithValue(e.res.data);
    }
  }
);

export const getGenres = createAsyncThunk(
  "movie/genres",
  async (_, { rejectWithValue }) => {
    try {
      const res: any = await connection.get(`genre/movie/list?language=en`);

      const messages = "something went wrong";
      if (res.status != 200) {
        throw new Error(messages);
      }
      // return console.log(res.data.genres);

      return res.data.genres;
    } catch (e: any) {
      console.log("Error", e);
      return rejectWithValue(e.res.data);
    }
  }
);

export const getLanguages = createAsyncThunk(
  "movie/languages",
  async (_, { rejectWithValue }) => {
    try {
      const res: any = await connection.get(`configuration/languages`);

      const messages = "something went wrong";
      if (res.status != 200) {
        throw new Error(messages);
      }
      // return console.log(res.data);

      return res.data;
    } catch (e: any) {
      console.log("Error", e);
      return rejectWithValue(e.res.data);
    }
  }
);

export const getDetailMovie = createAsyncThunk<string, movieState>(
  "movie/detail-movie",
  async ({ movie_id }, { rejectWithValue }) => {
    try {
      const res: any = await connection.get(`movie/${movie_id}?language=en-US`);

      const messages = "something went wrong";
      if (res.status != 200) {
        throw new Error(messages);
      }

      return res.data;
    } catch (e: any) {
      console.log("Error", e);
      return rejectWithValue(e.res.data);
    }
  }
);

export const getTrendingAll = createAsyncThunk<string, { trending: string }>(
  "movie/trending-all",
  async ({ trending }, { rejectWithValue }) => {
    try {
      const res: any = await connection.get(
        `trending/${trending}/day?language=en-US`
      );

      const messages = "something went wrong";
      if (res.status != 200) {
        throw new Error(messages);
      }

      return res.data.results;
    } catch (e: any) {
      console.log("Error", e);
      return rejectWithValue(e.res.data);
    }
  }
);

export const getMovieList = createAsyncThunk<string, { list: string }>(
  "movie/movie-list",
  async ({ list }, { rejectWithValue }) => {
    try {
      const res: any = await connection.get(
        `movie/${list}?language=en-US&page=1`
      );

      const messages = "something went wrong";
      if (res.status != 200) {
        throw new Error(messages);
      }

      return res.data.results;
    } catch (e: any) {
      console.log("Error", e);
      return rejectWithValue(e.res.data);
    }
  }
);

export const getCredits = createAsyncThunk<
  { cast: castState[]; crew: string },
  movieState
>("movie/get-credits", async ({ movie_id }, { rejectWithValue }) => {
  try {
    const res = await connection.get(
      `movie/${movie_id}/credits?language=en-US`
    );

    const messages = "something went wrong";
    if (res.status != 200) {
      throw new Error(messages);
    }

    const { cast, crew } = res.data;

    return {
      cast: cast,
      crew: crew,
    };
  } catch (e: any) {
    console.log("Error", e);
    return rejectWithValue(e.res.data);
  }
});

export const getReviews = createAsyncThunk<reviewState[], movieState>(
  "movie/get-reviews",
  async ({ movie_id }, { rejectWithValue }) => {
    try {
      const res = await connection.get(
        `movie/${movie_id}/reviews?language=en-US&page=1`
      );

      const messages = "something went wrong";
      if (res.status != 200) {
        throw new Error(messages);
      }

      return res.data.results;
    } catch (e: any) {
      console.log("Error", e);
      return rejectWithValue(e.res.data);
    }
  }
);

export const getRecomendations = createAsyncThunk<
  recomendationState[],
  movieState
>("movie/get-recomendations", async ({ movie_id }, { rejectWithValue }) => {
  try {
    const res = await connection.get(
      `movie/${movie_id}/recommendations?language=en-US&page=1`
    );

    const messages = "something went wrong";
    if (res.status != 200) {
      throw new Error(messages);
    }

    return res.data.results;
  } catch (e: any) {
    console.log("Error", e);
    return rejectWithValue(e.res.data);
  }
});

export const getKeywords = createAsyncThunk<keywordState[], movieState>(
  "movie/get-Keywords",
  async ({ movie_id }, { rejectWithValue }) => {
    try {
      const res = await connection.get(
        `movie/${movie_id}/keywords?language=en-US&page=1`
      );

      const messages = "something went wrong";
      if (res.status != 200) {
        throw new Error(messages);
      }

      return res.data.keywords;
    } catch (e: any) {
      console.log("Error", e);
      return rejectWithValue(e.res.data);
    }
  }
);
