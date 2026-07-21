import { ScrollReveal } from "@/components/scroll-reveal";
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden bg-[#f6f4ee]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-4 relative z-10">
            Jonnathas Gouvea
          </h1>
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-clay relative z-10 uppercase">
            Desenvolvedor Fullstack
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-clay z-10" />
    </section>
  );
}
