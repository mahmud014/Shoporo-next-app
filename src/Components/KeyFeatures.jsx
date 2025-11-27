import { FaLock, FaShippingFast, FaHeadset, FaSyncAlt } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Shop With Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105">
            <FaLock className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
            <p className="text-gray-600 text-sm">
              All transactions are encrypted and safe, giving you peace of mind.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105">
            <FaShippingFast className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
            <p className="text-gray-600 text-sm">
              Quick and reliable delivery right to your doorstep, every time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105">
            <FaHeadset className="text-5xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our dedicated support team is always ready to help you.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-105">
            <FaSyncAlt className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
            <p className="text-gray-600 text-sm">
              Hassle-free returns within 30 days, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
