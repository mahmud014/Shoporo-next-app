"use client";

import PrivateRoute from "../../Components/PrivateRoute";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddProductPage() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      category,
      price: parseFloat(price),
      stock: parseInt(stock),
      images: images.split(",").map((i) => i.trim()),
      description,
      rating: parseFloat(rating),
      createdAt: new Date(),
      email: user.email,
    };

    try {
      setLoading(true);

      const res = await fetch(`http://localhost:4000/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) throw new Error("Failed to add product");

      Swal.fire({
        title: "Product Added!",
        text: "Your product has been successfully added.",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });

      // reset form
      setName("");
      setCategory("");
      setPrice("");
      setStock("");
      setImages("");
      setDescription("");
      setRating("");
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error!",
        text: "There was an issue adding your product.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PrivateRoute>
      <div className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Add New Product</h1>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label className="font-semibold">Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: Wireless Bluetooth Headphones"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-semibold">Category</label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: Electronics"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-semibold">Price</label>
            <input
              type="number"
              step="0.01"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: 59.99"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-semibold">Stock</label>
            <input
              type="number"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: 150"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-semibold">
              Images (comma separated URLs)
            </label>
            <input
              type="text"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: https://example.com/image1.jpg, https://example.com/image2.jpg"
              value={images}
              onChange={(e) => setImages(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="font-semibold">Description</label>
            <textarea
              className="w-full mt-2 p-3 border rounded-lg"
              rows="4"
              placeholder="High-quality wireless earbuds with noise cancellation..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label className="font-semibold">Rating</label>
            <input
              type="number"
              step="0.1"
              className="w-full mt-2 p-3 border rounded-lg"
              placeholder="Ex: 4.6"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 rounded-lg text-white transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed"
                : "btn-primary-gradient cursor-pointer hover:bg-blue-700"
            }`}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </PrivateRoute>
  );
}
