import { lazy } from "react";
import AdminDashboard from "../../views/admin/AdminDashboard.jsx";

const Home = lazy(() => import("../../views/admin/AdminDashboard.jsx"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
];
