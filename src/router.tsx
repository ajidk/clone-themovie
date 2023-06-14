import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Detail, Popular } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Popular />,
    // children: [
    //   { element: <Navigate to="/movie/popular" />, index: true },
    //   { path: "popular", element: <Popular /> },
    //   { path: "popular/:movie_id", element: <Detail /> },
    // ],
  },
  {
    path: "/:movie_id",
    element: <Detail />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
