"use client";

import { useAuth } from "@/Context/AuthContext";
import Image from "next/image";

export default function UserProfile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg font-medium">You are not logged in.</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <div className="flex flex-col items-center">
        <Image
          src={user.photoURL || "/default-avatar.png"}
          alt="User Avatar"
          width={96} // required
          height={96} // required
          className="rounded-full object-cover mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">
          {user.displayName || "No Name"}
        </h2>
        <p className="text-gray-600">{user.email}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Account Info</h3>
        <ul className="space-y-2">
          <li>
            <span className="font-medium">Email:</span> {user.email}
          </li>
          <li>
            <span className="font-medium">User ID:</span> {user.uid}
          </li>
          <li>
            <span className="font-medium">Provider:</span>{" "}
            {user.providerData[0]?.providerId || "Unknown"}
          </li>
        </ul>
      </div>
    </div>
  );
}
