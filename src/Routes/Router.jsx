import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
  },
]);
