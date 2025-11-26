export default function Features() {
  const features = [
    { title: "Fast Delivery", desc: "Get your products delivered quickly." },
    { title: "Secure Payments", desc: "Safe and reliable payment options." },
    { title: "Wide Selection", desc: "Choose from thousands of products." },
    { title: "24/7 Support", desc: "We are here to help anytime." },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Shopora?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <div
              key={idx}
              className="card p-6 hover:shadow-lg transition-shadow duration-300 bg-white rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
