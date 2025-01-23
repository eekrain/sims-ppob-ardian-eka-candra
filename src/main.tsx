import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import NotFoundError from "./components/NotFoundError";
import { DashboardLayout } from "./components/dashboard";
import HomePage from "./pages/home";
import TopupPage from "./pages/topup";

import AuthLayout from "./components/auth/Layout";
import LoginPage from "./pages/auth/login";
import RegistrationPage from "./pages/auth/registration";
import Redirect from "./components/Redirect";

const router = createBrowserRouter([
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
