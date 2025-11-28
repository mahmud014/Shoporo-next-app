"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          "https://shoporo-next-app-server.vercel.app/products"
        );
        const data = await res.json();
        setProducts(data.slice(0, 6));
      } catch (err) {
        throw err;
      }
    }
    fetchProducts();
  }, []);

  if (!products.length) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>

        {/* Mobile scroll */}
        <div className="flex gap-4 overflow-x-auto md:hidden py-2">
          {products.map((product) => (
            <div key={product._id} className="min-w-[250px] shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="text-center mt-7">
          <Link href={"/products"} className="btn btn-primary-gradient ">
            See All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
