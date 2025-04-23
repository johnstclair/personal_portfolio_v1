import React from "react";
import { ReactDOM, RouterProvider, createBrowserRouter } from "react-dom/client";

import App from "./App";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    }
  ],
  { basename: "/personal_portfolio_v1/#" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
