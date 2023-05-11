import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";

import "./assets/scss/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./pages/Homepage";
import CGUPage from "./pages/CGUPage";
import NotFoundPage from "./pages/NotFoundPage";
import PirateDesCaraibes from "./pages/PirateDesCaraibes";
import HarryPotter from "./pages/HarryPotter";
import StarWars from "./pages/StarWars";
import Pandora from "./pages/Pandora";
import LaTerreDuMilieu from "./pages/LaTerreDuMilieu";

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
        path: "/pirate-des-caraibes",
        element: <PirateDesCaraibes />,
      },
      {
        path: "/harry-potter",
        element: <HarryPotter />,
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
        path: "/la-terre-du-milieu",
        element: <LaTerreDuMilieu />,
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
