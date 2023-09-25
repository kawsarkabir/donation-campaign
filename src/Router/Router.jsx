import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/Donation/DonationDetails/DonationDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/campaings.json"),
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/donationdetails/:id",
        element: <DonationDetails />,
        loader: ()=> fetch("/campaings.json")
      },

      {
        path: "/statistics",
        element: <Statistics />,
      },
    ],
  },
]);

export default Router;
