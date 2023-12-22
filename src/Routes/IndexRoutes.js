import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RouteLayout from '../RouteLayout/RouteLayout';
import HomePage from '../Pages/HomePage/HomePage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> }
    ],
  },
]);

function IndexRoutes() {
  return <RouterProvider router={router} />;
}

export default IndexRoutes;