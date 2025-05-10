// src/features/Auth/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuthActions";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/signin" replace />;
}
