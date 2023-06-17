import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Detail, Popular } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/movie",
    element: <Popular />,
    // children: [
    //   { element: <Navigate to="/" />, index: true },
    //   { path: "", element: <Popular /> },
    //   { path: "/:movie_id", element: <Detail /> },
    // ],
  },
  {
    path: "/movie/:movie_id",
    element: <Detail />,
  },

  {
    path: "/",
    element: <Dashboard />,
  },
]);
