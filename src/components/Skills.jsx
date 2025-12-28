import React from "react";

export default function Skills() {
  const skills = {
    Languages: [
      "Python",
      "Java",
      "C++",
      "TypeScript",
      "JavaScript (ES6+)",
      "SQL",
      "HTML5/CSS3",
    ],
    "Core CS": [
      "Data Structures & Algorithms (DSA)",
      "System Design",
      "Scalability",
      "OOP",
    ],
    "Systems & Backend": [
      "Node.js",
      "RESTful APIs",
      "MySQL",
      "GraphQL",
      "Micro-services",
    ],
    "Cloud & Tooling": [
      "Google Cloud Platform (GCP)",
      "Firebase",
      "CI/CD",
      "Git",
      "Webpack",
    ],
    "Testing & Security": [
      "Jest",
      "Mocha",
      "Unit Testing",
      "OAuth 2.0",
      "XSS/CSRF Mitigation",
    ],
    Frontend: ["React.js", "Redux", " Vue.js, Angular – familiarity"],
  };
  return (
    <div>
      <section id="skills" className="py-5 max-w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skills]) => (
            <div className="bg-bgCard p-6 rounded-xl" key={category}>
              <h3 className="text-xl mb-4 text-primary">{category}</h3>
              <ul className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <li
                    className="px-4 py-2 rounded-full
             bg-linear-to-r from-sky-400/30 via-white to-orange-300/30 text-black text-sm
             "
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
