"use client";

import { useEffect } from "react";

import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user) {
      // Redirect to login with redirect query
      router.push(`/login?redirect=${pathname}`);
    }
  }, [user, pathname, router]);

  // Show nothing (or spinner) while checking auth
  if (!user) return null;

  return children;
}
