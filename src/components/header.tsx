import { profile } from "@/data/profile";

const sections = [
  { id: "hero", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projetos" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="text-base font-bold tracking-tight hover:text-cyan-500 transition-colors duration-200"
        >
          <span className="inline-block w-2 h-2 bg-cyan-500 mr-2 align-middle" />
          {profile.name}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="font-mono text-sm font-semibold tracking-wider uppercase hover:text-cyan-500 transition-colors duration-200"
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
