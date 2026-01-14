import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import SignInPage from "./app/auth/pages/SignInPage";
import SignUpPage from "./app/auth/pages/SignUpPage";
import PrivateRoute from "./shared/components/PrivateRoute";
import RouteErrorBoundary from "./shared/components/RouteErrorBoundary";
import ForgotPasswordPage from "./app/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "./app/auth/pages/ResetPasswordPage";
import { theme } from "./shared/lib/mui-theme";
import { ThemeProvider } from "@mui/material";
import LandingPage from "./app/landing/pages/LandingPage";
import HomePage from "./app/dashboard/pages/HomePage";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: "/dashboard",
        element: <HomePage />,
        index: true,
      },
    ],
  },
  {
    path: "/auth",
    element: <Outlet />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
        index: true,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  </StrictMode>
);
