import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 my-10">
      {/* Hero / Banner */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-white rounded-xl overflow-hidden mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://i.postimg.cc/0QnNjbZ0/cooperation-team-concept.jpg"
            alt="Team Collaboration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" /> {/* overlay */}
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Shopora</h1>
          <p className="text-lg md:text-2xl">
            Learn more about our mission, vision, and values.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Shopora is dedicated to providing customers with a modern eCommerce
            platform, delivering a wide range of products with exceptional
            service and secure shopping experience.
          </p>
          <p className="text-gray-700">
            We aim to make online shopping fast, reliable, and enjoyable for
            everyone.
          </p>
        </div>
        <div className="relative w-full h-80 md:h-96">
          <Image
            src="https://i.postimg.cc/Hxx2v7J0/group-people-working-out-business-plan-office.jpg"
            alt="Our Team"
            fill
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </section>

      {/* Values / Features */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="card p-6 bg-white shadow hover:shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                We prioritize our customers’ needs and satisfaction.
              </p>
            </div>
            <div className="card p-6 bg-white shadow hover:shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and fairness.
              </p>
            </div>
            <div className="card p-6 bg-white shadow hover:shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve and adopt new ideas and technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
