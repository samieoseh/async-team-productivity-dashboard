import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import SignInPage from "./app/auth/pages/SignInPage";
import SignUpPage from "./app/auth/pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/auth",
    element: <Outlet />,
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
  </StrictMode>
);
