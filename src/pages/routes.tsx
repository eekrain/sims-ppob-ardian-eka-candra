import { RouteObject } from "react-router";

import AuthLayout from "@/components/auth/Layout";
import LoginPage from "./auth/login";
import RegistrationPage from "./auth/registration";
import Redirect from "@/components/Redirect";

import { DashboardLayout } from "@/components/dashboard";
import HomePage from "./dashboard/home";
import TopupPage from "./dashboard/topup";
import TransactionPage from "./dashboard/transaction";
import AccountPage from "./dashboard/account";
import NotFoundError from "@/components/NotFoundError";

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
