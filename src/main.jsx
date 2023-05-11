import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";

import "./assets/scss/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CGUPage from "./pages/CGUPage";
import NotFoundPage from "./pages/NotFoundPage";
import CaribbeanCruise from "./pages/CaribbeanCruise";
import Wisard from "./pages/Wisard";
import StarWars from "./pages/StarWars";
import Pandora from "./pages/Pandora";
import MiddleEarth from "./pages/MiddleEarth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/CGU",
        element: <CGUPage />,
      },
      {
        path: "/caribbean-cruise",
        element: <CaribbeanCruise />,
      },
      {
        path: "/wisard",
        element: <Wisard />,
      },
      {
        path: "/star-wars",
        element: <StarWars />,
      },
      {
        path: "/pandora",
        element: <Pandora />,
      },
      {
        path: "/middle-earth",
        element: <MiddleEarth />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
