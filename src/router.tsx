import { createBrowserRouter } from "react-router-dom";
import { Detail, Popular } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Popular />,
  },
  {
    path: "/:movie_id",
    element: <Detail />,
  },
]);
