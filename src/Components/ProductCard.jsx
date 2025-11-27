import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  const productId = product._id;
  const shortDescription =
    product.description.length > 40
      ? product.description.slice(0, 40) + "..."
      : product.description;

  return (
    <div className="rounded-lg p-4 shadow hover:shadow-lg transition">
      {/* Product Image */}
      <div className="relative w-full h-64 mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Product Info */}
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-500">{product.category}</p>
      <p className="mt-2 font-bold">${product.price}</p>
      <p className="text-sm text-gray-600 mt-1">{shortDescription}</p>

      {/* Rating + View Details */}
      <div className="flex justify-between mt-2 items-center">
        <p className="text-yellow-500 mt-1">⭐ {product.rating}</p>
        <Link href={`/products/${productId}`}>
          <button className="px-3 py-1 btn-primary-gradient cursor-pointer text-white rounded hover:bg-blue-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
