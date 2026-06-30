import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-16 px-6 border-t-2 border-black">
      <div className="max-w-7xl mx-auto">
        <span className="section-label">Sobre</span>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-l-2 border-cyan-500 pl-4">
            <p className="font-mono text-sm font-bold tracking-widest mb-4 text-cyan-500">
              CONTATO
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${profile.social.email}`}
                className="block hover:text-cyan-500 transition-colors duration-200"
              >
                Email
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-cyan-500 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-cyan-500 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
