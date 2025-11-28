"use client";

import PrivateRoute from "../../Components/PrivateRoute";
import { useAuth } from "../../Context/AuthContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function ManageProductsPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    async function fetchProducts() {
      try {
        const res = await fetch(
          `https://shoporo-next-app-server.vercel.app/products?email=${user.email}`
        );
        const data = await res.json();

        setProducts(
          Array.isArray(data)
            ? data.map((p) => ({
                ...p,
                _id: typeof p._id === "string" ? p._id : p._id?.$oid || "",
              }))
            : []
        );
      } catch {
        Swal.fire(
          "Error",
          "Failed to fetch your products. Please try again later.",
          "error"
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [user?.email]);

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted permanently.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(
        `https://shoporo-next-app-server.vercel.app/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error();

      Swal.fire("Deleted!", "Product has been deleted.", "success");

      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch {
      Swal.fire("Error", "Failed to delete product.", "error");
    }
  };

  if (loading)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;

  return (
    <PrivateRoute>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Manage Your Products
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">
            You have not added any products yet.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Price</th>
                  <th className="px-4 py-2 border">Stock</th>
                  <th className="px-4 py-2 border">Created At</th>
                  <th className="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <tr key={p._id} className="text-center">
                    <td className="px-4 py-2 border">{p.name}</td>
                    <td className="px-4 py-2 border">{p.category}</td>
                    <td className="px-4 py-2 border">${p.price}</td>
                    <td className="px-4 py-2 border">{p.stock}</td>
                    <td className="px-4 py-2 border">
                      {new Date(p.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-2 border flex justify-center gap-2">
                      <button
                        onClick={() => router.push(`/products/${p._id}`)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        View
                      </button>

                      <button
                        onClick={() => router.push(`/edit-product/${p._id}`)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(p._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PrivateRoute>
  );
}
