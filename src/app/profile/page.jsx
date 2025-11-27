"use client";

import PrivateRoute from "@/Components/PrivateRoute";
import UserProfile from "@/Components/UserProfile";

export default function ProfilePage() {
  return (
    <PrivateRoute>
      <UserProfile />
    </PrivateRoute>
  );
}
