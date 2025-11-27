"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { IoMdEyeOff } from "react-icons/io";

import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/Context/AuthContext";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const { signup, signInWithGoogle } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get redirect path or fallback to home
  const redirectPath = searchParams.get("redirect") || "/";

  // Email/Password registration
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPass) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill out all fields.",
      });
      return;
    }
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        html: `
      Password must include:<br/>
      • Minimum 8 characters<br/>
      • At least 1 uppercase letter<br/>
      • At least 1 lowercase letter<br/>
      • At least 1 number<br/>
      • At least 1 special character (!@#$%^&*)
    `,
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

    try {
      await signup(email, password);
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: `Welcome, ${name}!`,
      });

      // Redirect after signup
      router.push(redirectPath);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    }
  };

  // Google Sign-Up / Sign-In
  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You are logged in with Google!",
      });
      router.push(redirectPath);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h2>

        {/* Email/Password Form */}
        <form onSubmit={handleRegister} className="space-y-5">
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
                {showPass ? <IoMdEyeOff size={20} /> : <FaEye size={20} />}
              </span>
            </div>
          </div>

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

          <button
            type="submit"
            className="w-full btn-primary-gradient cursor-pointer text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <hr className="grow border-t border-gray-300" />
          <span className="mx-3 text-gray-400">or</span>
          <hr className="grow border-t border-gray-300" />
        </div>

        {/* Google Sign-Up */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center cursor-pointer gap-2 bg-gray-300 text-black py-3 rounded-xl  transition"
        >
          <FcGoogle size={24} />
          Sign up with Google
        </button>

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
