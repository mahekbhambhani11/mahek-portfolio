import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./Contact";
export default function InProgress() {
  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="py-20 max-w-full flex justify-center items-center bg-linear-to-r from-sky-400/30 via-white to-orange-300/30 max-h-viewport"
      >
        <div className="max-w-full ">
          <h1 className="text-5xl font-bold mb-4">In Progress</h1>

          <p className="text-gray-400 max-w-2xl mb-8">
            This project is currently under active development. I’m working on
            architecture, performance, and polishing the final experience.
          </p>

          <Link
            to="/"
            className="px-6 py-3 bg-primary text-black rounded-lg font-semibold hover:text-blue-300"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
