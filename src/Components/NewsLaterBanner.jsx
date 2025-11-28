"use client";

import { useState } from "react";
import Swal from "sweetalert2";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      return Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email address.",
      });
    }

    try {
      await fetch("https://shoporo-next-app-server.vercel.app/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: "You have successfully subscribed to our newsletter.",
      });

      setEmail("");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Subscription Failed",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <section className="py-16">
      <div className="mx-auto">
        <div className="btn-primary-gradient text-white p-10 shadow-lg md:px-100 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
            Join Our Newsletter
          </h2>

          <p className="mb-6 text-center md:text-left">
            Get exclusive offers, updates, and early access to new products.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg text-black outline-none"
              required
            />

            <button
              type="submit"
              className="px-6 py-3 bg-black hover:bg-gray-800 rounded-lg font-semibold cursor-pointer transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
