import { profile } from "@/data/profile";
import { ScrollReveal } from "@/components/scroll-reveal";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-clay/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="section-label">Projetos</span>
        </ScrollReveal>

        <div className="divide-y divide-clay/20">
          {profile.projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <div className="py-7">
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="font-mono text-2xl md:text-3xl font-bold text-clay/30 leading-none mt-0.5 shrink-0 w-8 md:w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
                          {project.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-[#4a4a4a] mb-4">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-clay/10 text-clay font-mono text-[10px] font-bold tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4 font-mono text-[11px] font-bold tracking-[0.15em] uppercase">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-clay transition-colors duration-200"
                            >
                              GitHub →
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-clay transition-colors duration-200"
                            >
                              Live →
                            </a>
                          )}
                        </div>
                      </div>

                      {project.image ? (
                        <a
                          href={project.live ?? project.github ?? "#"}
                          target={project.live ?? project.github ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="shrink-0 w-full md:w-48 lg:w-64 aspect-[16/10] overflow-hidden border border-clay/20 group"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        </a>
                      ) : (
                        <div className="shrink-0 w-full md:w-48 lg:w-64 aspect-[16/10]" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
