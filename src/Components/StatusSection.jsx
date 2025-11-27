import { FaShoppingCart, FaTruck, FaUsers, FaStar } from "react-icons/fa";

export default function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our E-Commerce Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-8">
          {/* Stat 1 */}
          <div className="py-8 flex flex-col items-center bg-white shadow-md rounded-xl transition-transform hover:scale-105">
            <FaShoppingCart className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-3xl font-semibold mb-1">12,500+</h3>
            <p className="text-gray-600 text-sm tracking-wider">
              PRODUCTS SOLD
            </p>
          </div>

          {/* Stat 2 */}
          <div className="py-8 flex flex-col items-center bg-white shadow-md rounded-xl transition-transform hover:scale-105">
            <FaTruck className="text-5xl text-green-500 mb-4" />
            <h3 className="text-3xl font-semibold mb-1">3,200+</h3>
            <p className="text-gray-600 text-sm tracking-wider">
              ORDERS DELIVERED
            </p>
          </div>

          {/* Stat 3 */}
          <div className="py-8 flex flex-col items-center bg-white shadow-md rounded-xl transition-transform hover:scale-105">
            <FaUsers className="text-5xl text-purple-500 mb-4" />
            <h3 className="text-3xl font-semibold mb-1">8,700+</h3>
            <p className="text-gray-600 text-sm tracking-wider">
              HAPPY CUSTOMERS
            </p>
          </div>

          {/* Stat 4 */}
          <div className="py-8 flex flex-col items-center bg-white shadow-md rounded-xl transition-transform hover:scale-105">
            <FaStar className="text-5xl text-yellow-400 mb-4" />
            <h3 className="text-3xl font-semibold mb-1">4,500+</h3>
            <p className="text-gray-600 text-sm tracking-wider">
              REVIEWS & RATINGS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
