import { useState, useEffect } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`top-0 w-full z-50 transition-all duration-300 ${
        scroll ? "fixed bg-zinc-800 shadow-md" : "absolute bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl cursor-pointer">
          <span
            className={`transition-colors ${
              scroll ? "text-white" : "text-primary"
            }`}
          >
            Portfolio
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`transition-colors font-medium ${
                  scroll
                    ? "text-white hover:text-blue-300"
                    : "text-gray-400 hover:text-blue-300"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="space-y-1">
            <span
              className={`block w-6 h-0.5 transition ${
                scroll ? "bg-white" : "bg-black"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition ${
                scroll ? "bg-white" : "bg-black"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition ${
                scroll ? "bg-white" : "bg-black"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            scroll ? "bg-zinc-800" : "bg-white"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 py-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium ${
                    scroll
                      ? "text-white hover:text-blue-300"
                      : "text-gray-700 hover:text-blue-300"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
