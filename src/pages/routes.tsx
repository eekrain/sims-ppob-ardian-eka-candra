import { RouteObject } from "react-router";

import { AuthLayout } from "@/components/auth/Layout";
import LoginPage from "./auth/login";
import RegistrationPage from "./auth/registration";
import { Redirect, NotFoundError } from "@/components/common";

import { DashboardLayout } from "@/components/dashboard";
import HomePage from "./dashboard/home";
import TopupPage from "./dashboard/topup";
import TransactionPage from "./dashboard/transaction";
import AccountPage from "./dashboard/account";
import PembayaranPage from "./dashboard/pembayaran";

const allRoutes: RouteObject[] = [
  {
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/topup",
        element: <TopupPage />,
      },
      {
        path: "/transaction",
        element: <TransactionPage />,
      },
      {
        path: "/account",
        element: <AccountPage />,
      },
      {
        path: "/pembayaran/:service_code",
        element: <PembayaranPage />,
      },
      {
        path: "*",
        element: <NotFoundError />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      { path: "registration", element: <RegistrationPage /> },
      { path: "*", element: <Redirect to="/auth" /> },
    ],
  },
];

export default allRoutes;
