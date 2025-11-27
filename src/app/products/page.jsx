import ProductCard from "@/Components/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:4000/products", {
    cache: "no-store",
  });
  const products = await res.json();

  return products.map((product) => ({
    ...product,
    _id: typeof product._id === "string" ? product._id : product._id.$oid,
  }));
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className=" text-center text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
