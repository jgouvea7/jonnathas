"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

type Filter = "todos" | "frontend" | "backend" | "infra";

const filters: { key: Filter; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "infra", label: "Infra" },
];

export function Skills() {
  const [active, setActive] = useState<Filter>("todos");

  const filtered =
    active === "todos"
      ? profile.skills
      : profile.skills.filter(
          (s) => s.category.toLowerCase() === active,
        );

  return (
    <section id="skills" className="py-16 px-6 border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <span className="section-label">Skills</span>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`font-mono text-xs font-bold tracking-widest uppercase px-4 py-2 border-2 transition-colors duration-200 ${
                active === f.key
                  ? "bg-cyan-500 text-white border-cyan-500"
                  : "bg-white text-black border-black hover:text-cyan-500 hover:border-cyan-500"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 min-h-[160px] sm:min-h-[280px] lg:min-h-[380px] content-start">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="brutal-border px-4 py-3 font-mono text-sm font-bold flex items-center justify-center min-h-[64px] cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
