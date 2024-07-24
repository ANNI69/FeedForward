import NotFound from "@/app/not-found";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { PropsWithChildren, ReactNode } from "react";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps): ReactNode {
  const isAuthenticated = useAuth();
  return isAuthenticated ? <>{children}</> : <NotFound />;
}
