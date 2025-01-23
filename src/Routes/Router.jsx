import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Portfolio from "../Pages/Portfolio/Portfolio";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/portfolio", element: <Portfolio></Portfolio> },
      { path: "/contact-us", element: <ContactUs></ContactUs> },
      { path: "about-us", element: <AboutUs></AboutUs> },
      { path: "/login", element: <Login></Login> },
      {path:"/register",element:<Register></Register>}
    ],
  },
]);
