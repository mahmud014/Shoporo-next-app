"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPass) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill out all fields.",
      });
      return;
    }

    if (password !== confirmPass) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Registration Completed!",
      text: "Your account has been created successfully.",
    });

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Email Address
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
                {showPass ? <IoMdEyeOff size={20} /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPass ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
              />

              <span
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-4 top-3 cursor-pointer text-gray-500"
              >
                {showConfirmPass ? (
                  <IoMdEyeOff size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {/* Bottom link */}
        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </section>
  );
}
