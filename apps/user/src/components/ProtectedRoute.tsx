import React from 'react';
import { Navigate, useLocation } from 'react-router';

// In a real application, this would use a global auth state context or Redux/Zustand store.
// For now, we simulate an authenticated user. 
// Change to `false` to test the redirection!
const isAuthenticated = true;

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the /signin page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience.
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

