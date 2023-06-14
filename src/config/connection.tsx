/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const server = "https://api.themoviedb.org/3/";

const tokenData =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTM5MDcxZGI5ZjI4NTAwOTkxZTNkMDE0MjRkYTM2ZCIsInN1YiI6IjY0NzZjZTc5ZDM3MTk3MDEzMzQ2N2M2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P3fxG3GvKEVSulUncS5oxrswEJ6-b5G5ME-FEz5BzPA";

const connection: AxiosInstance = axios.create({
  baseURL: server,
});

const requestInterceptor: any = (config: AxiosRequestConfig) => {
  config.headers = {
    "Content-Type": "multipart/form-data",
    Accept: "*/*",
    Authorization: "Bearer " + tokenData,
  };
  return config;
};

const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

connection.interceptors.request.use(requestInterceptor);
connection.interceptors.response.use(responseInterceptor);

export default connection;
