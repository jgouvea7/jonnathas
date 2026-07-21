"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll.current && current > 80);
      lastScroll.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-paper/80 backdrop-blur-md border-b border-clay transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] bg-[#1a1a1a] transition-transform duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#1a1a1a] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-[#1a1a1a] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="font-sans text-xs font-bold tracking-[0.2em] uppercase hover:text-clay transition-colors duration-200"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>

      <div
        className={`md:hidden border-t border-clay transition-all duration-300 overflow-hidden ${open ? "max-h-64" : "max-h-0"}`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={() => setOpen(false)}
              className="font-sans text-xs font-bold tracking-[0.2em] uppercase hover:text-clay transition-colors duration-200"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
