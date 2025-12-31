import { lazy } from "react";

const Home = lazy(() => import("../../views/Home.jsx"));

export const sellerRoutes = [
  {
    path: "",
    element: <Home></Home>,
    ability: ["admin", "seller"],
  },
];
