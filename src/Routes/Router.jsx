import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Portfolio from "../Pages/Home/Portfolio/Portfolio";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      { path: "/portfolio", element: <Portfolio></Portfolio> },
      { path: "/contact-us", element: <ContactUs></ContactUs> },
      { path: "about-us", element: <AboutUs></AboutUs> },
    ],
  },
]);
