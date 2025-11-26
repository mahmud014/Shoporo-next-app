"use client";

import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [faqOpen, setFaqOpen] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Sent!",
      text: "Thank you for contacting us. We'll get back to you shortly.",
      icon: "success",
      confirmButtonText: "OK",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const faqs = [
    {
      question: "How can I contact support?",
      answer: "You can use the form or email support@shopora.com.",
    },
    {
      question: "What are your support hours?",
      answer: "Our team is available Monday-Friday, 9am to 6pm.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! Please contact us for bulk pricing inquiries.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 space-y-20">
        {/* Hero */}
        <section className="relative h-64 md:h-80 flex items-center justify-center text-white rounded-xl overflow-hidden">
          <Image
            src="https://i.postimg.cc/0QnNjbZ0/cooperation-team-concept.jpg"
            alt="Contact Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <h1 className="relative z-10 text-3xl md:text-4xl font-bold text-center px-4">
            Contact Shopora
          </h1>
        </section>

        {/* Contact Info + Form */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">Get in touch</h2>
            <p className="text-gray-700">
              Have questions? Fill out the form and we’ll get back to you
              promptly.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@shopora.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  123 Commerce Street, Shop City, USA
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows={5}
              required
            />
            <button type="submit" className="btn btn-primary-gradient mt-2">
              Send Message
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full text-left px-4 py-3 font-semibold hover:bg-gray-200 rounded-lg flex justify-between items-center"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  {faq.question}
                  <span>{faqOpen === index ? "−" : "+"}</span>
                </button>
                {faqOpen === index && (
                  <div className="px-4 py-3 text-gray-700 border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section className="relative h-64 md:h-96 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0869270480576!2d-122.4194154846815!3d37.7749297797597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0a0e9b1f%3A0x7c4c1a4d0a1b4f0a!2sShop%20City!5e0!3m2!1sen!2sus!4v1701412562456!5m2!1sen!2sus"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </main>
  );
}
