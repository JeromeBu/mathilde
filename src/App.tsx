import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Listing</div>,
  },
  {
    path: "/bob",
    element: <div>Détail</div>,
  },
]);

export const App = () => <RouterProvider router={router} />;
