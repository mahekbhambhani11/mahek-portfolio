import React from "react";

export default function About() {
  return (
    <section id="about" className="py-5 max-w-full">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-400 leading-relaxed">
        {" "}
        I’m a Software Engineer with 5+ years of experience building
        production-grade web applications at scale. I’ve worked on enterprise
        platforms involving micro-frontends, performance optimization, and cloud
        deployments.
      </p>
      <p className="text-gray-400 leading-relaxed mt-4">
        I enjoy solving complex UI problems, improving system performance, and
        designing maintainable frontend architectures that scale with business
        needs.
      </p>
    </section>
  );
}
