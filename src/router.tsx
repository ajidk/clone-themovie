import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Popular } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movie",
    element: <Popular />,
  },
]);
