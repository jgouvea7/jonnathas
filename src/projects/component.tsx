export default function ProjectCard({ maxWidth = "xl" }: { maxWidth?: "sm" | "md" | "lg" | "xl" }) {
  const projects = [
    {
      name: "MultiPay",
      description: "Sistema demonstrando microsserviços, processamento assíncrono e integração distribuída entre componentes.",
      technologies: ["Spring Boot", "PostgreSQL", "Docker", "Kafka"],
      link: "https://github.com/jgouvea7/multiPay"
    },
    {
      name: "Delivery Project",
      description: "Sistema de delivery simulando pedidos e entregas, com microsserviços e comunicação assíncrona para alta escalabilidade e desempenho.",
      technologies: ["Spring Boot", "PostgreSQL", "Dcoker", "Kafka"],
      link: "https://github.com/jgouvea7/DeliveryProject"
    },
    {
      name: "Estokar",
      description: "Gerenciamento completo de estoque, controlando entradas, saídas e inventário em tempo real de forma intuitiva.",
      technologies: ["NestJS", "Next.js", "PostgreSQL", "Docker"],
      link: "https://github.com/jgouvea7/estokar"
    },
    {
      name: "B2BFlow",
      description: "Envio automatizado de mensagens para empresas, focando em produtividade e comunicação eficiente com múltiplos clientes.",
      technologies: ["FastAPI", "Supabase", "Z-API"],
      link: "https://github.com/jgouvea7/b2bflowProject"
    },
    {
      name: "FURIA ChatBot",
      description: "Agente virtual interativo fornecendo informações sobre a equipe FURIA com respostas rápidas.",
      technologies: ["Flask", "Angular", "MongoDB", "Selenium"],
      link: "https://github.com/jgouvea7/chatbotFuria"
    },
  ];

  return (
    <div className={`flex flex-col gap-6 mt-6 w-full max-w-${maxWidth}`}>
      {projects.map((project, i) => (
        <a
          key={i}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-lg p-3 transition-colors duration-300 hover:bg-neutral-600 hover:text-neutral-950 cursor-pointer"
        >
          {/* Nome do projeto */}
          <h3 className="text-lg font-bold mb-1 text-cyan-600">{project.name}</h3>
          {/* Descrição */}
          <p className="text-neutral-100 mb-2 line-clamp-3 text-sm">{project.description}</p>
          {/* Tecnologias */}
          <div className="flex gap-2 flex-wrap">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-900 text-white text-xs px-2 py-0.5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </a>
      ))}
    </div>
  );
}
