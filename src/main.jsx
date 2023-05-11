import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";

import "./assets/scss/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CGUPage from "./pages/CGUPage";
import NotFoundPage from "./pages/NotFoundPage";
// import CaribbeanCruise from "./pages/CaribbeanCruise";
// import Wizard from "./pages/Wizard";
// import StarWars from "./pages/StarWars";
// import Pandora from "./pages/Pandora";
// import MiddleEarth from "./pages/MiddleEarth";
import GetPageFivePlanet from "./pages/GetPageFivePlanet";

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
        element: <GetPageFivePlanet />,
      },
      {
        path: "/wizard",
        element: <GetPageFivePlanet />,
      },
      {
        path: "/star-wars",
        element: <GetPageFivePlanet />,
      },
      {
        path: "/pandora",
        element: <GetPageFivePlanet />,
      },
      {
        path: "/middle-earth",
        element: <GetPageFivePlanet />,
      },
      {
        path: "/planets",
        element: <GetPageFivePlanet />,
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
