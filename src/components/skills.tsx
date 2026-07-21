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
    <section id="skills" className="py-24 px-6 border-t border-clay/30">
      <div className="max-w-7xl mx-auto">
        <span className="section-label">Skills</span>

        <div className="flex flex-wrap gap-1.5 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`font-mono text-[11px] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-sm transition-all duration-300 ${
                active === f.key
                  ? "bg-clay text-white"
                  : "text-[#1a1a1a] hover:text-clay"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 min-h-[80px] content-start">
          {filtered.map((skill, i) => (
            <span
              key={skill.name}
              className="px-3 py-1.5 bg-clay/10 text-clay font-mono text-xs font-semibold rounded-sm cursor-default transition-all duration-300 hover:bg-clay/20"
              style={{
                animation: filtered.length > 0 ? `fadeIn 300ms ease-out ${i * 40}ms both` : "none",
              }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
