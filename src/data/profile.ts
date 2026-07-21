export interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  live?: string;
}

export interface Skill {
  name: string;
  category: string;
}

export const profile: {
  name: string;
  role: string;
  heroPhrase: string;
  about: string[];
  skills: { name: string; category: string }[];
  projects: Project[];
  social: { github: string; linkedin: string; email: string };
} = {
  name: "Jonnathas de Gouvea",
  role: "Desenvolvedor de Software",
  heroPhrase: "Criar soluções confiáveis, escaláveis e de fácil manutenção.",
  about: [
    "Desenvolvedor de Software com experiência em aplicações web, APIs REST e desenvolvimento full stack utilizando Java, Python e TypeScript. Possuo conhecimentos em arquitetura de software, containers, cloud e práticas modernas de desenvolvimento, incluindo automação de deploys e observabilidade.",
  
  ],
  skills: [
    { name: "Angular", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Java", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "C", category: "Backend" },
    { name: "Spring Boot", category: "Backend" },
    { name: "NestJS", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "MongoDB", category: "Backend" },
    { name: "Redis", category: "Backend" },
    { name: "Kafka", category: "Backend" },
    { name: "RabbitMQ", category: "Backend" },
    { name: "Azure", category: "Infra" },
    { name: "AWS", category: "Infra" },
    { name: "OCI", category: "Infra" },
    { name: "Docker", category: "Infra" },
  ],
  projects: [
    {
      title: "Estokar",
      description:
        "Plataforma full-stack de gestão de estoque (web e mobile) com suporte offline, sincronização de dados, autenticação OAuth2 + JWT, CI/CD, deploy em Azure/Vercel, monitoramento com Sentry e Docker",
      image: "/estokar/1782167957932.jpg",
      tags: [
        "TypeScript", "NestJS", "Next.js", "Expo", "Supabase", "PostgreSQL", "Azure", "Docker", "Sentry"],
      github: "https://github.com/jgouvea7/estokar",
      live: "https://estokar.vercel.app",
    },
    {
      title: "Grimoire",
      description:
        "Plataforma com IA que transforma vídeos do YouTube em resumos, flashcards e quizzes. Aplicação full-stack com autenticação, gamificação RPG, arquitetura baseada em microsserviços e observabilidade com Prometheus e Grafana.",
      image: "/grimoire/1782837951060.jpg",
      tags: ["Python", "FastAPI", "PostgreSQL", "Docker", "Redis", "Next.js", "Prometheus", "Grafana", "Mistral 7B"],
      github: "https://github.com/jgouvea7/grimoire",
    },
    {
      title: "API de detecção de fraude",
      description:
        "Sistema de detecção de fraude de alta performance desenvolvido para a Rinha de Backend 2026. Utiliza C e Hono (TypeScript), com engine ANN nativa otimizada com AVX2, KD-Tree para busca em 14 dimensões e carregamento de dados via mmap.",
      tags: [
      "C", "TypeScript", "Hono", "AVX2", "KD-Tree", "Docker"],
      github: "https://github.com/jgouvea7/fraud-detection-api",
    },
    {
      title: "DocFlow AI",
      description:
        "Sistema de análise de documentos com IA desenvolvido para estudo de RAG. Combina Spring Boot e FastAPI para processamento de documentos, embeddings e banco de dados vetorial, permitindo consultas em linguagem natural.",
      image: "/docflow/1781711625391.jpg",
      tags: ["Java", "Python", "Spring Boot", "FastAPI", "PostgreSQL", "RabbitMQ", "Angular", "Docker", "Mistral 7B"],
      github: "https://github.com/jgouvea7/docflow-ia",
    }
  ],
  social: {
    github: "https://github.com/jgouvea7",
    linkedin: "https://linkedin.com/in/jgouvea7",
    email: "jonnathas.contato@gmail.com",
  },
};
