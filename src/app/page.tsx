"use client";

import ProjectCard from "@/projects/component";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useRef } from "react";
import { SiGmail } from "react-icons/si";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const main = mainRef.current;
    if (!main) return;

    const section = main.querySelector(`#${id}`) as HTMLElement;
    if (section) {
      let extraOffset = 0;
      if (id === "sobre") extraOffset = 90;

      main.scrollTo({
        top: section.offsetTop - extraOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex items-start justify-center min-h-screen bg-neutral-800">
      <div className="flex flex-col md:flex-row w-11/12 max-w-6xl h-[98vh] md:h-[100vh] overflow-hidden gap-8">
        <aside className="w-full md:w-1/2 bg-neutral-800 text-neutral-100 flex flex-col items-center md:items-start p-8 md:mt-18 gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 drop-shadow-lg text-center md:text-left cursor-default">
            Jonnathas Gouvea
          </h1>
          <p className="text-lg font-bold text-cyan-600 drop-shadow-md text-center md:text-left cursor-default">
            Desenvolvedor Backend
          </p>

          <nav className="hidden md:flex flex-col gap-4 mt-8 md:mt-12">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-md hover:text-cyan-600 transition-all duration-300 drop-shadow-md text-left"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-md hover:text-cyan-600 transition-all duration-300 drop-shadow-md text-left"
            >
              Projetos
            </button>
          </nav>

          <div className="mt-8 md:mt-130 flex gap-6">
            <a
              href="https://www.linkedin.com/in/jgouvea7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white md:hover:text-cyan-600 transition-colors flex items-center gap-2"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://github.com/jgouvea7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white md:hover:text-cyan-600 transition-colors flex items-center gap-2"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://instagram.com/jonnathas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white md:hover:text-cyan-600 transition-colors flex items-center gap-2"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="mailto:jonnathasg@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white md:hover:text-cyan-600 transition-colors flex items-center gap-2"
            >
              <SiGmail size={25} />
            </a>
          </div>
        </aside>

        <main
          ref={mainRef}
          className="w-full md:w-2/3 overflow-y-scroll scrollbar-none scroll-smooth md:pt-22 pb-8"
        >
          <section
            id="sobre"
            className="flex flex-col items-center justify-start bg-neutral-800 p-6 md:p-8"
          >
            <h2 className="text-lg text-neutral-100 font-semibold mb-4 block md:hidden">
              Sobre
            </h2>

            <div className="max-w-xl text-gray-200 space-y-4 text-justify cursor-default">
              <p>
                Olá! Meu nome é Jonnathas Gouvea, sou estudante de 
                Analise e Desenvolvimento de sistemas e sou Desenvolvedor Backend
                apaixonado por criar soluções eficientes. Tenho
                experiência prática em projetos pessoais, explorando conceitos
                de microsserviços, automação e integração de sistemas.
              </p>
              <p>
                Ao desenvolver esses projetos, aprendi a lidar com desafios de
                organização de código, performance e boas práticas de
                desenvolvimento. Cada projeto pessoal é uma oportunidade de
                colocar em prática novas ideias e experimentar tecnologias
                diferentes.
              </p>
              <p>
                Sou movido pela curiosidade e pelo desejo de aprender
                continuamente. Busco sempre aprimorar minhas habilidades,
                aprender novas ferramentas e metodologias, e entregar soluções
                de alta qualidade mesmo em projetos individuais.
              </p>
              <p>
                Meu objetivo é usar a tecnologia para resolver problemas reais e
                criar soluções que realmente façam diferença no dia a dia das pessoas. 
                Busco desenvolver sistemas claros, eficientes e fáceis de manter, sempre
                priorizando qualidade e impacto prático.
              </p>
              <p>Principais stacks usadas recentementes:</p>
              <div className="grid grid-cols-2 gap-y-2">
                <span className="text-white">Java</span>
                <span className="text-white">Spring Boot</span>
                <span className="text-white">TypeScript</span>
                <span className="text-white">NestJS</span>
                <span className="text-white">Python</span>
                <span className="text-white">FastAPI</span>
              </div>
            </div>
          </section>

          <section
            id="projetos"
            className="flex flex-col items-center justify-start bg-neutral-800 p-6 md:p-8"
          >
            <h2 className="text-lg text-neutral-100 font-semibold mb-4 block md:hidden">
              Projetos
            </h2>

            <ProjectCard />
          </section>
        </main>
      </div>
    </div>
  );
}
