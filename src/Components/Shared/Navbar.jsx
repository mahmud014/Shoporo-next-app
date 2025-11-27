"use client";

import { useAuth } from "@/Context/AuthContext";
import Link from "next/link";
import { HiBars3BottomRight, HiChevronDown } from "react-icons/hi2";
import Swal from "sweetalert2";

export default function Navbar() {
  const { user, logout } = useAuth();

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, logout",
    });

    if (confirm.isConfirmed) {
      try {
        await logout();
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have been logged out successfully",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      }
    }
  };

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <HiBars3BottomRight size={24} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="text-2xl font-bold">
            Shopora
          </Link>
        </div>

        {/* Center (desktop links) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-full p-1">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
              >
                <li>
                  <Link href="/profile">User Profile</Link>
                </li>
                <li>
                  <Link href="/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link href="/manage-products">Manage Products</Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="text-red-500">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn mx-1">
                Login
              </Link>
              <Link href="/register" className="btn mx-1 btn-primary-gradient">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
