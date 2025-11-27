"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Please fill in all fields",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "You logged in without backend!",
    });

    setEmail("");
    setPassword("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>

            <div className="relative">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-3 cursor-pointer text-gray-500"
              >
                {showPass ? <IoEyeOff size={20} /> : <FaEye size={20} />}
              </span>
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-2">
              <a
                href="/forget-password"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full btn-primary-gradient text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Bottom link */}
        <p className="text-center mt-6 text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </section>
  );
}
