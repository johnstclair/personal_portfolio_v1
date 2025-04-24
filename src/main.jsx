import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/Home";
import Projects from "./components/Projects";

import "./index.css";
import "./style.css";

import {
  Route,
  Routes,
  HashRouter,
  Navigate,
  createBrowserRouter, 
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
  ],
  { basename: "/personal_portfolio_v1/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
