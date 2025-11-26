"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-gray-100 min-h-[70vh] w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/CLsCw1H9/cyber-monday-shopping-sales.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/40 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-10 text-center px-4 md:px-0 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to Shopora
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6">
          A modern eCommerce platform for amazing products
        </p>
        <Link href="/products">
          <button className="btn btn-primary-gradient px-6 py-3 text-lg rounded-lg">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}
