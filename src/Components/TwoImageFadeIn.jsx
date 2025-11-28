"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TwoImageFadeIn() {
  const router = useRouter();

  return (
    <div className="container mx-auto relative w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24  gap-10">
      {/* ---------- TEXT SECTION ---------- */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 space-y-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Best Selling Smart Collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-600 text-lg md:text-xl"
        >
          Discover our premium range of smart gadgets with cutting-edge
          technology and elegant design crafted for your lifestyle.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 px-8 py-3 btn-primary-gradient cursor-pointer text-white rounded-xl shadow-lg hover:bg-gray-900 transition"
          onClick={() => {
            router.push("/products");
          }}
        >
          Shop Now
        </motion.button>
      </motion.div>

      {/* ---------- IMAGE SECTION ---------- */}
      <div className="relative w-[450px] h-[450px]">
        {/* Back Image */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
          className="absolute top-0 left-0"
        >
          <Image
            src="/SmartWatch.jpg"
            alt="Smart Watch"
            width={400}
            height={400}
            className="rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Front Image */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            y: {
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            },
          }}
          className="absolute bottom-0 right-0"
        >
          <Image
            src="/speakersconcept.jpg"
            alt="Speakers"
            width={300}
            height={300}
            className="rounded-xl shadow-2xl border-4 border-white"
          />
        </motion.div>
      </div>
    </div>
  );
}
