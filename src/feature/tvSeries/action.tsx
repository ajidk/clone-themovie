/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import connection from "../../config/connection";
import { listMovieState } from "../movie/slice";

export interface listSeriesState {
  // list: "airing_today" | "on_the_air" | "popular" | "top_rated" | undefined;
  list: string;
}

export const getListSeries = createAsyncThunk<
  listMovieState[],
  { series: string }
>("tv/lis-series", async ({ series }, { rejectWithValue }) => {
  try {
    const res: any = await connection.get(`tv/${series}?language=en-US&page=1`);

    const messages = "something went wrong";
    if (res.status != 200) {
      throw new Error(messages);
    }

    console.log("res", res.data.results);

    return res.data.results;
  } catch (e: any) {
    console.log("Error", e);
    return rejectWithValue(e.res.data);
  }
});
