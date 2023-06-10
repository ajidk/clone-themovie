import { createBrowserRouter } from "react-router-dom";
import { Popular } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Popular />,
  },
  {
    path: "/movie",
    element: <Popular />,
  },
]);
