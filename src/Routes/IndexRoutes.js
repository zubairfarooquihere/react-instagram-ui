import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RouteLayout from '../RouteLayout/RouteLayout';
import HomePage from '../Pages/HomePage/HomePage'
import ExporePage from "../Pages/ExporePage/ExporePage";
import ReelPage from "../Pages/ReelPage/ReelPage";
import MessagesPage from "../Pages/MessagesPage/MessagesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/explore', element: <ExporePage /> },
      { path: '/reel', element: <ReelPage /> },
      { path: '/messages', element: <MessagesPage /> },
    ],
  },
]);

function IndexRoutes() {
  return <RouterProvider router={router} />;
}

export default IndexRoutes;