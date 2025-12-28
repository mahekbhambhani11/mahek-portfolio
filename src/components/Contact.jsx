import React from "react";

export default function Contact() {
  return (
    <div>
      <section id="contact" className="py-5 max-w-full ">
        <h2 className="text-3xl font-bold mb-5 text-center">Contact Me</h2>
        <p>Interested in working together or discussing opportunities?</p>
        <div className=" justify-center flex flex-row gap-3">
          <a
            className="underline hover:no-underline"
            href="mailto:mahekkomalb@gmail.com"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/mahek-bhambhani/"
            className="underline hover:no-underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mahekbhambhani11"
            className="underline hover:no-underline"
          >
            Github
          </a>
        </div>
      </section>
    </div>
  );
}
