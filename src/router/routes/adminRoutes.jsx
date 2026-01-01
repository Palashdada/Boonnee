import { lazy } from "react";
import AdminDashboard from "../../views/admin/AdminDashboard.jsx";
import Orders from "../../views/admin/Orders.jsx";

const Home = lazy(() => import("../../views/admin/AdminDashboard.jsx"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
];
