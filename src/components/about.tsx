import { profile } from "@/data/profile";
import { ScrollReveal } from "@/components/scroll-reveal";

export function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-clay/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <span className="section-label">Sobre</span>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <ScrollReveal delay={100}>
            <div className="space-y-4">
              {profile.about.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-[#4a4a4a]">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="border-l border-clay pl-5">
              <p className="font-mono text-xs font-bold tracking-[0.2em] mb-5 text-clay">
                CONTATO
              </p>
              <div className="space-y-3">
                <a
                  href={`mailto:${profile.social.email}`}
                  className="block text-sm hover:text-clay transition-colors duration-200"
                >
                  Email
                </a>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-clay transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-clay transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
