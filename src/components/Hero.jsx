import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 max-w-full flex justify-center items-center bg-linear-to-r from-sky-400/30 via-white to-orange-300/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-full "
      >
        <p className="text-primary mb-3">Hi, I am</p>
        <h1 className="text-5xl font-bold mb-4">Mahek Bhambhani</h1>
        <h2 className="text-3xl text-gray-400 nb-6">
          Software Engineer | Frontend & Full Stack
        </h2>
        <p className="text-gray-400 max-w-2xl mb-8">
          I build scalable, high-performance web applications with React,
          Node.js and cloud technologies - focussing on clean architecture and
          real world impact.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-black rounded-lg font-semibold hover:text-blue-300"
          >
            View Work
          </a>
          <a
            href="/"
            className="px-6 py-3 border border-primary rounded-lg hover:bg-blue-300"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
