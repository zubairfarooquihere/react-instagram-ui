import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RouteLayout from '../RouteLayout/RouteLayout';
import HomePage from '../Pages/HomePage/HomePage'
import ExporePage from "../Pages/ExporePage/ExporePage";
import ReelPage from "../Pages/ReelPage/ReelPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/explore', element: <ExporePage /> },
      { path: '/reel', element: <ReelPage /> },
    ],
  },
]);

function IndexRoutes() {
  return <RouterProvider router={router} />;
}

export default IndexRoutes;