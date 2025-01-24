import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "sonner";
import allRoutes from "./pages/routes";

import "./index.css";

const router = createBrowserRouter(allRoutes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
