import MainLayout from "../../layout/MainLayout";
import { privateRoutes } from "./privateRoutes";

export const getRouter = () => {
  return {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: privateRoutes,
  };
};
