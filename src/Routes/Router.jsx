import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Portfolio from "../Pages/Portfolio/Portfolio";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import DashboardLayOut from "../LayOuts/DashboardLayOut";
import WorkSheet from "../Pages/WorkSheet/WorkSheet";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import EmployeeList from "../Pages/EmployeeList/EmployeeList";
import AllEmployeeList from "../Pages/AllEmployeeList/AllEmployeeList";
import Payroll from "../Pages/PayRoll/Payroll";
import Profile from "../Pages/Profile/Profile";
import PrivateEmployee from "./PrivateEmployee";
import PrivateHr from "./PrivateHr";
import Progress from "../Pages/Progress/Progress";
import PrivateAdmin from "./PrivateAdmin";
import Details from "../Pages/EmployeeList/Details";
import PrivateCommon from "./PrivateCommon";
import Messages from "../Pages/Messages/Messages";
import Error from "../Pages/Error/Error";
import Overview from "../Pages/Overview/Overview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/portfolio", element: <Portfolio></Portfolio> },
      { path: "/contact-us", element: <ContactUs></ContactUs> },
      { path: "about-us", element: <AboutUs></AboutUs> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayOut></DashboardLayOut>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      // for all users
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "overview",
        element: (
          <PrivateRoute>
         <Overview></Overview>
          </PrivateRoute>
        ),
      },
      // *for employee
      {
        path: "work-sheet",
        element: (
          <PrivateEmployee>
            <WorkSheet></WorkSheet>
          </PrivateEmployee>
        ),
      },
      { path: "payment-history", element: <PaymentHistory></PaymentHistory> },
      // *For hr
      {
        path: "employee-list",
        element: (
          <PrivateHr>
            <EmployeeList></EmployeeList>
          </PrivateHr>
        ),
      },
      {
        path: "details/:email",
        element: (
          <PrivateHr>
            <Details></Details>
          </PrivateHr>
        ),
      },
      {
        path: "progress",
        element: (
          <PrivateHr>
            <Progress></Progress>
          </PrivateHr>
        ),
      },
      // *for admin
      {
        path: "all-employee-list",
        element: (
          <PrivateAdmin>
            <AllEmployeeList></AllEmployeeList>
          </PrivateAdmin>
        ),
      },
      {
        path: "payroll",
        element: (
          <PrivateAdmin>
            <Payroll></Payroll>{" "}
          </PrivateAdmin>
        ),
      },
      // *for admin & hr
      {
        path: "message",
        element: (
          <PrivateCommon>
            <Messages></Messages>
          </PrivateCommon>
        ),
      },
    ],
  },
]);
