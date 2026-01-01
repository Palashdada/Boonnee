import { AiFillDashboard, AiOutlineShopping } from "react-icons/ai";
import { BiCategory, BiLoaderCircle } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiChat1 } from "react-icons/ci";

export const allNav = [
  {
    id: 1,
    titel: "Dashboard",
    icon: <AiFillDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    titel: "Orders",
    icon: <AiOutlineShopping />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    titel: "Category",
    icon: <BiCategory />,
    role: "admin",
    path: "/admin/orders",
  },
  {
    id: 4,
    titel: "Sellers",
    icon: <FiUser />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    titel: "Payment request",
    icon: <FiUser />,
    role: "admin",
    path: "/admin/dashboard/",
  },
  {
    id: 6,
    titel: "Deactivate Sellers",
    icon: <BsCurrencyDollar />,
    role: "admin",
    path: "/admin/dashboard/deactivate-sellers",
  },
  {
    id: 7,
    titel: "Sellers Request",
    icon: <BiLoaderCircle />,
    role: "admin",
    path: "/admin/dashboard/sellers-request",
  },
  {
    id: 8,
    titel: "Chat Sellers",
    icon: <CiChat1 />,
    role: "admin",
    path: "/admin/dashboard/chat-sellers",
  },
];
