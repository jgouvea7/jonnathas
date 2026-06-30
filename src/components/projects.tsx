import { profile } from "@/data/profile";

export function Projects() {
  return (
    <section id="projects" className="py-12 px-6 border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <span className="section-label">Projetos</span>

        <div className="grid md:grid-cols-3 gap-3">
          {profile.projects.map((project) => (
            <a
              key={project.title}
              href={project.live ?? project.github ?? "#"}
              target={project.live ?? project.github ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="brutal-card group block"
            >
              <div className="aspect-[16/9] bg-gray-100 border-b-2 border-black overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>

              <div className="p-4">
                <h3 className="font-bold mb-1">{project.title}</h3>
                <p className="text-xs leading-relaxed mb-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-1.5 py-0.5 bg-cyan-500 text-white font-mono text-[10px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 font-mono text-[10px] font-bold tracking-wider uppercase">
                  {project.github && <span className="hover:text-cyan-500 transition-colors duration-200">GitHub →</span>}
                  {project.live && <span className="hover:text-cyan-500 transition-colors duration-200">Live →</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
