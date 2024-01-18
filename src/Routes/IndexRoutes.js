import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RouteLayout from '../RouteLayout/RouteLayout';
import HomePage from '../Pages/HomePage/HomePage'
import ExporePage from "../Pages/ExporePage/ExporePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'explore', element: <ExporePage /> },
    ],
  },
]);

function IndexRoutes() {
  return <RouterProvider router={router} />;
}

export default IndexRoutes;