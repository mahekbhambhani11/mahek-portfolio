import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website v1",
      description:
        "Developed a personal portfolio website using HTML,CSS to showcase projects, skills, and experience ",
      stack: ["HTML", "CSS"],
      impact: "Showcased my work to potential employers and clients",
      status: "Completed",
      liveUrl: "https://mahekbhambhani11.github.io/",
      githubUrl:
        "https://github.com/mahekbhambhani11/mahekbhambhani11.github.io",
    },
    {
      title: "Enterprise Medical Platform",
      description:
        "Built a scalable React application used by medical professionals with performance optimizations and WCAG compliance.",
      stack: ["React", "Node", "MongoDB", "AWS"],
      impact: "Improved load time by 35%",
      status: "In-Progress",
      liveUrl: "In-Progress",
      githubUrl: "In-Progress",
    },
    {
      title: "QR Code Generator",
      description:
        "Developed a QR Code Generator with QR Code Generator API. This QR Code Generator can make QR Code of any Text or Link.QR Code will be generated in image format.",
      stack: ["HTML", "CSS", "JavaScript"],
      impact: "QR codes can be generated for various URLs",
      status: "Completed",
      liveUrl: "https://mahekbhambhani11.github.io/QR-code-generator/",
      githubUrl: "https://github.com/mahekbhambhani11/QR-code-generator",
    },
    {
      title: "Text to Voice Converter",
      description:
        "Developed a Text to speech converter or Text to voice generator app using HTML CSS and JavaScript.",

      stack: ["HTML", "CSS", "JavaScript"],
      status: "Completed",
      impact: "This app can convert any text into voice or speech format.",
      liveUrl: "https://mahekbhambhani11.github.io/Text-to-voice-converter/",
      githubUrl: "https://github.com/mahekbhambhani11/Text-to-voice-converter",
    },
    {
      title: "User Authentication System",
      description:
        "Created a robust user authentication and authorization system, incorporating email verification, password resets, OAuth setup, diverse prebuilt options, and adherence to best practices.",

      stack: ["MERN", "JWT", "OAuth"],
      status: "In-Progress",
      impact: "Created secure user authentication flows for web applications.",
    },
  ];
  return (
    <div>
      <section id="projects" className="py-5 max-w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 pl-4 pr-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="relative group bg-white rounded-2xl p-8 shadow-md overflow-hidden group-hover:opacity-30"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-primary mb-3">{project.impact}</p>
              <p className="flex flex-wrap gap-4 mt-6 mb-2 justify-center">
                {project.stack.map((tech) => (
                  <span className="text-xs px-2 py-1 border rounded" key={tech}>
                    {tech}
                  </span>
                ))}
              </p>
              <div
                className="absolute inset-0
                         bg-linear-to-r from-sky-400/30 via-white to-orange-300/30
                         opacity-0
                         group-hover:opacity-100
                         transition-opacity duration-300
                         flex items-center justify-center
                         z-10"
              >
                <div className="flex gap-6">
                  {project.status === "Completed" ? (
                    <>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:text-blue-300
                              "
                      >
                        Live Preview
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:text-blue-300"
                      >
                        GitHub Code
                      </a>
                    </>
                  ) : (
                    <Link
                      to="/in-progress"
                      className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:text-blue-300"
                    >
                      View Progress{" "}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
