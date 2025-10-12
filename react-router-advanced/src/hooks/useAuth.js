import { useState } from "react";

export function useAuth() {
  // Simulate an authenticated user
  const [isAuthenticated] = useState(true);
  return { isAuthenticated };
}
