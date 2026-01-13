import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import SignInPage from "./app/auth/pages/SignInPage";
import SignUpPage from "./app/auth/pages/SignUpPage";
import HomePage from "./app/home/pages/HomePage";
import PrivateRoute from "./shared/components/PrivateRoute";
import RouteErrorBoundary from "./shared/components/RouteErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        path: "/",
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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>
);
