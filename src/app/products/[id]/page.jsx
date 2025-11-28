"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import PrivateRoute from "../../../Components/PrivateRoute";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(
          `https://shoporo-next-app-server.vercel.app/products/${id}`
        );
        if (!res.ok) throw new Error("Product not found");

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setProduct(null);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">Product not found</h1>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <PrivateRoute>
      <div className="px-6 py-20 max-w-5xl mx-auto">
        <button
          onClick={() => window.history.back()}
          className="mb-8 px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image container */}
          <div className="relative w-full h-96">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product info */}
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-blue-600 text-2xl mt-2 font-semibold">
              ${product.price}
            </p>
            <p className="mt-6 text-gray-700">{product.description}</p>
            <p className="mt-4 text-gray-400 text-sm">
              Stock: {product.stock} | Created:{" "}
              {new Date(product.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}
