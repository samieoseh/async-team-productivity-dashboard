import { Outlet, Navigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function PrivateRoute() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return <Outlet />;
}
