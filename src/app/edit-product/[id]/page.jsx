"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import PrivateRoute from "../../../Components/PrivateRoute";

export default function EditProductPage() {
  const { id } = useParams();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    images: [""],
  });

  const [loading, setLoading] = useState(true);

  // Load product data
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://shoporo-next-app-server.vercel.app/products/${id}`
        );
        const data = await res.json();
        setForm({
          name: data.name,
          category: data.category,
          price: data.price,
          stock: data.stock,
          description: data.description,
          images: data.images || [""],
        });
      } catch (err) {
        console.error(err);
        Swal.fire("Error", "Failed to load product", "error");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://shoporo-next-app-server.vercel.app/products/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Update failed");

      Swal.fire("Updated!", "Product updated successfully", "success");
      router.push("/dashboard/manage-products");
    } catch (err) {
      Swal.fire("Error", "Failed to update product", "error");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <PrivateRoute>
      <div className="container mx-auto px-4 py-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6">Edit Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
          <label>Product Name </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Product Name"
            required
          />

          <label>Category</label>

          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Category"
            required
          />

          <label>Price</label>

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Price"
            required
          />

          <label>Stock</label>

          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Stock"
            required
          />

          <label>Description</label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Description"
            rows={4}
          />

          <label>Images</label>

          <input
            type="text"
            name="images"
            value={form.images[0]}
            onChange={(e) => setForm({ ...form, images: [e.target.value] })}
            className="w-full p-2 border rounded"
            placeholder="Image URL"
          />

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 btn-primary-gradient cursor-pointer text-white rounded hover:bg-green-700"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </PrivateRoute>
  );
}
