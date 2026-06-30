import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <p className="font-mono text-xs font-bold tracking-widest mb-4 text-cyan-500">
          {profile.role.toUpperCase()}
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.85] tracking-tight">
          {profile.name}
        </h1>

        <div className="mt-6 sm:mt-8 max-w-2xl">
          <p className="text-base sm:text-lg leading-relaxed">
            {profile.heroPhrase}
          </p>
        </div>

        <div className="mt-8 sm:mt-10 flex gap-3">
          <a href="#projects" className="brutal-button">
            Ver Projetos
          </a>
          <a
            href={`mailto:${profile.social.email}`}
            className="brutal-button !border-cyan-500 !bg-white !text-cyan-500 hover:!bg-cyan-500 hover:!text-white"
          >
            Contato
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-cyan-500" />
    </section>
  );
}
