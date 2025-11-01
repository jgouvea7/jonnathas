"use client";

import { useScrollFadeIn } from "./usescrollfadein";

export default function Home() {
  const sobreRef = useScrollFadeIn();
  const certRef = useScrollFadeIn();
  const skillsRef = useScrollFadeIn();
  const contactRef = useScrollFadeIn();

  const projects = [
    {
      name: "MultiPay",
      description:
        "Sistema demonstrando microsserviços, processamento assíncrono e integração distribuída entre componentes.",
      technologies: ["Spring Boot", "PostgreSQL", "Docker", "Kafka"],
      link: "https://github.com/jgouvea7/multiPay",
    },
    {
      name: "Delivery",
      description:
        "Sistema de delivery simulando pedidos e entregas, com microsserviços e comunicação assíncrona para alta escalabilidade e desempenho.",
      technologies: ["Spring Boot", "PostgreSQL", "Docker", "Kafka"],
      link: "https://github.com/jgouvea7/DeliveryProject",
    },
    {
      name: "Estokar",
      description:
        "Gerenciamento completo de estoque, controlando entradas, saídas e inventário em tempo real de forma intuitiva.",
      technologies: ["NestJS", "Next.js", "PostgreSQL", "Docker"],
      link: "https://github.com/jgouvea7/estokar",
    },
    {
      name: "B2BFlow",
      description:
        "Envio automatizado de mensagens para empresas, focando em produtividade e comunicação eficiente com múltiplos clientes.",
      technologies: ["FastAPI", "Supabase", "Z-API"],
      link: "https://github.com/jgouvea7/b2bflowProject",
    },
    {
      name: "FURIA ChatBot",
      description:
        "Agente virtual interativo fornecendo informações sobre a equipe FURIA com respostas rápidas.",
      technologies: ["Flask", "Angular", "MongoDB", "Selenium"],
      link: "https://github.com/jgouvea7/chatbotFuria",
    },
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-800 text-white p-6">
      <div className="max-w-2xl w-full text-left">
        <h1 className="text-5xl font-bold mt-25 mb-2">Jonnathas de Gouvea</h1>
        <h2 className="text-2xl text-neutral-300 mb-5">Desenvolvedor Backend e Fullstack</h2>

        <section ref={sobreRef} className="fade-in mb-9">
          <h3 className="text-2xl font-semibold mb-2">Sobre mim</h3>
          <p className="text-neutral-300 text-xl">
            Comecei a programar em 2022, explorando principalmente desenvolvimento front-end. Em 2024, iniciei a faculdade de Análise e Desenvolvimento de Sistemas, quando passei a focar no desenvolvimento back-end.
            Ao longo do percurso, adquiri experiência em projetos full stack e back-end, utilizando Java, TypeScript, Python, bancos de dados relacionais e NoSQL, além de ferramentas de mensageria e cloud. Estou em constante evolução, buscando aplicar meus conhecimentos em projetos reais e desafios técnicos.
          </p>
        </section>

        <section ref={certRef} className="fade-in mt-9">
          <h3 className="text-xl font-semibold mb-3">Certificações</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.skills.google/public_profiles/bb127180-a945-4dfc-bd00-d964a4fa890e/badges/16907479"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-800 transition-colors w-fit"
            >
              <img
                src="https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000"
                alt="Google Cloud Logo"
                className="w-10 h-10"
              />
              <div>
                <p className="font-semibold text-blue-400">Kubernetes in Google Cloud</p>
                <p className="text-sm text-gray-400">Google Cloud Skills Boost</p>
              </div>
            </a>
          </div>
        </section>

        <section ref={skillsRef} className="fade-in mt-9">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "TypeScript",
              "Java",
              "Python",
              "Spring Boot",
              "NestJS",
              "FastAPI",
              "Flask",
              "Angular",
              "Next.js",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "Kafka",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-blue-600/20 text-blue-400 rounded-full px-3 py-1 text-sm font-medium hover:bg-blue-600/40 transition cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-9">
          <h3 className="text-xl font-semibold mb-4">Projetos</h3>
          <div className="flex flex-col gap-6">
            {projects.map((project) => {
              const ref = useScrollFadeIn<HTMLAnchorElement>();
              return (
                <a
                  key={project.name}
                  ref={ref}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fade-in block rounded-lg px-3 py-3 hover:bg-gray-800 transition-colors"
                >
                  <h4 className="text-lg font-bold text-blue-400 mb-1">{project.name}</h4>
                  <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600/20 text-blue-400 border border-blue-500/40 rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section ref={contactRef} className="fade-in mt-9 text-center">
          <h3 className="text-2xl font-semibold mb-2">Contato</h3>
          <p className="text-neutral-400 text-xl mb-4">Para mais informações!</p>

          <div className="flex items-center justify-center gap-6 mb-20">
            <a
              href="https://www.linkedin.com/in/jgouvea7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-7 h-7 filter invert"
              />
            </a>

            <a
              href="mailto:jonnathasg@gmail.com"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg"
                alt="Email"
                className="w-7 h-7 filter invert"
              />
            </a>

            <a
              href="https://www.instagram.com/jonnathas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                alt="Instagram"
                className="w-7 h-7 filter invert"
              />
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
