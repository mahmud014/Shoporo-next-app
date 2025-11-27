"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/Components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("http://localhost:4000/products");
      const data = await res.json();
      setProducts(
        data.map((p) => ({
          ...p,
          _id: typeof p._id === "string" ? p._id : p._id.$oid,
        }))
      );
    }
    fetchProducts();
  }, []);

  // Filter by search
  let filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  );

  // Sort filtered products
  if (sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "price") filtered.sort((a, b) => a.price - b.price);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-3xl font-bold mb-6">All Products</h1>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 w-full md:w-1/2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort by</option>
          <option value="name">Name (A-Z)</option>
          <option value="price">Price (Low → High)</option>
        </select>
      </div>

      {/* Products Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      )}
    </div>
  );
}
