"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

interface ResumePageProps {
  onBackToTerminal: () => void;
}

type SkillCategory = "backend" | "frontend";
type SkillFilter = "all" | SkillCategory;

type Skill = {
  name: string;
  category: SkillCategory;
};

type SkillGridItem = Skill & {
  ghost?: boolean;
};

const SKILLS: Skill[] = [
  { name: "TypeScript", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "C", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Docker", category: "backend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Angular", category: "frontend" }
];

const SECTIONS = ["home", "about", "skills", "contact"] as const;
type Section = typeof SECTIONS[number];

export function ResumePage({ onBackToTerminal }: ResumePageProps) {
  const [filter, setFilter] = useState<SkillFilter>("all");
  const [activeSection, setActiveSection] = useState<Section>("home");

  const containerRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const filteredSkills = useMemo(() => {
    if (filter === "all") {
      return SKILLS;
    }
    return SKILLS.filter((skill) => skill.category === filter);
  }, [filter]);

  const skillsForGrid = useMemo<SkillGridItem[]>(() => {
    if (filter === "all") {
      return SKILLS;
    }

    const ghostCount = SKILLS.length - filteredSkills.length;
    const ghostItems: SkillGridItem[] = Array.from({ length: ghostCount }, (_, index) => ({
      name: `ghost-${index}`,
      category: filter,
      ghost: true,
    }));

    return [...filteredSkills, ...ghostItems];
  }, [filter, filteredSkills]);

  const getSectionRef = (section: Section) => {
    switch (section) {
      case "home":
        return homeRef;
      case "about":
        return aboutRef;
      case "skills":
        return skillsRef;
      case "contact":
        return contactRef;
      default:
        return homeRef;
    }
  };

  const scrollToSection = (section: Section) => {
    getSectionRef(section).current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = containerRef.current.scrollTop;
      const offset = 200; // Trigger offset

      SECTIONS.forEach((section) => {
        const element = getSectionRef(section).current;
        if (element) {
          const top = element.offsetTop - offset;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section);
          }
        }
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="h-[85vh] w-[96%] max-w-[1200px] overflow-hidden rounded-[20px] border border-slate-200/60 bg-slate-100 shadow-[0_45px_100px_-20px_rgba(15,23,42,0.3)] backdrop-blur-md"
    >
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-slate-100 bg-slate-100/80 px-4 backdrop-blur-md">
        <div className="flex w-[120px] items-center gap-2">
          <button
            onClick={onBackToTerminal}
            aria-label="Close resume app"
            className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] shadow-inner transition hover:brightness-110"
          />
          <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-inner" />
          <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-inner" />
        </div>

        <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-200/50 p-1 shadow-sm">
          {SECTIONS.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium capitalize transition-all duration-300 ${activeSection === item
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-900"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="w-[120px]"></div>
      </div>

      <div
        ref={containerRef}
        className="h-[calc(85vh-3rem)] overflow-y-auto scroll-smooth bg-slate-100 [font-family:var(--font-inter)]"
      >
        <section ref={homeRef} className="relative flex min-h-[77vh] flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 [font-family:var(--font-sora)] md:text-[5rem] md:leading-[1.1] lg:text-[6rem]">
              Hi, I&apos;m <br />
              <span className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent">Jonnathas</span>
            </h1>
            <p className="max-w-xl text-lg text-slate-500 md:text-2xl font-light tracking-wide">
              Software Engineer crafting beautiful, solid, and scalable experiences.
            </p>
          </motion.div>
        </section>

        <section ref={aboutRef} className="flex min-h-[77vh] flex-col items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-4xl"
          >
            <div className="mb-10 text-center">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500">About Me</span>
            </div>

            <div className="rounded-[2rem] bg-slate-100 p-10 md:p-16 text-center">
              <p className="text-xl leading-relaxed text-slate-700 md:text-2xl font-light">
                I build reliable software with a focus on <strong className="font-semibold text-slate-900">backend architecture</strong>, performance, and scalable systems.
                I enjoy solving complex problems and turning technical ideas into products that are stable, clear, and extremely maintainable.
              </p>

              <div className="mt-12 flex justify-center">
                <a
                  href="/fullstack.pdf"
                  download
                  className="group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-medium text-white shadow-lg shadow-slate-900/20 transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/30"
                >
                  <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
                  Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        <section ref={skillsRef} className="flex min-h-[77vh] flex-col items-center justify-center px-6 py-20">
          <div className="w-full max-w-5xl flex flex-col justify-start min-h-[50vh]">
            <div className="mb-16 text-center flex flex-col items-center">
              <span className="mb-8 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500">Skills</span>

              <div className="flex flex-wrap gap-2 rounded-full border border-slate-200 bg-slate-100 p-1.5 shadow-sm">
                {(["all", "backend", "frontend"] as SkillFilter[]).map((option) => (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`relative rounded-full px-6 py-2 text-sm font-medium capitalize transition-colors duration-200 ${filter === option ? "text-white" : "text-slate-600 hover:text-slate-900"
                      }`}
                  >
                    {filter === option && (
                      <motion.div
                        layoutId="active-filter"
                        className="absolute inset-0 rounded-full bg-slate-900"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-start">
              {skillsForGrid.map((skill) => (
                <div
                  key={skill.name}
                  aria-hidden={skill.ghost}
                  className={`group flex aspect-[2/1] items-center justify-center rounded-2xl border p-6 shadow-sm transition-all ${skill.ghost
                    ? "invisible border-transparent bg-transparent shadow-none"
                    : "border-slate-200 bg-slate-100 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
                    }`}
                >
                  {!skill.ghost && (
                    <span className="text-lg font-medium text-slate-700 group-hover:text-slate-900">{skill.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={contactRef} className="flex min-h-[77vh] flex-col items-center justify-center px-6 py-20 pb-32">
          <div className="w-full max-w-4xl">
            <div className="mb-16 text-center">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-500">Stay in Touch</span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 [font-family:var(--font-sora)] md:text-5xl">Let&apos;s work together.</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <a
                href="https://linkedin.com/in/jgouvea7"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-slate-200/50 bg-white p-10 shadow-lg shadow-slate-200/30 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="rounded-full bg-blue-50 p-4 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Linkedin size={32} />
                </div>
                <span className="text-lg font-medium text-slate-800">LinkedIn</span>
              </a>

              <a
                href="mailto:jonnathasg@gmail.com"
                className="group flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-slate-200/50 bg-white p-10 shadow-lg shadow-slate-200/30 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="rounded-full bg-slate-50 p-4 text-slate-600 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <Mail size={32} />
                </div>
                <span className="text-lg font-medium text-slate-800">Email</span>
              </a>

              <a
                href="https://github.com/jgouvea7"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center gap-4 rounded-[2rem] border border-slate-200/50 bg-white p-10 shadow-lg shadow-slate-200/30 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="rounded-full bg-slate-50 p-4 text-slate-600 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <Github size={32} />
                </div>
                <span className="text-lg font-medium text-slate-800">GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
}
