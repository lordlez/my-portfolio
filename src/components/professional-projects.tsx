"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import type { Translations, Language } from "@/locales/types";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
}

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

const professionalProjectsES = [
  {
    title: "FlyDevs - Administración Interna De Usuarios",
    image: "/flydevs-img.png",
    description:
      "Plataforma de administración interna de usuarios para el control de horas, actividades, etc.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "JollyTok - Plataforma de juegos",
    image: "/jollytok-img.png",
    description:
      "Plataforma interactiva para juegos conectada a la red social TikTok.",
    technologies: ["React", "TypeScript", "Node.js", "Firebase"],
  },
  {
    title: "TULiP - Landing Page",
    image: "/tulip-img.png",
    description:
      "Plataforma que conecta a doctores con pacientes de una manera sencilla e intuitiva.",
    technologies: ["React", "Tailwind CSS"],
  },
];

const professionalProjectsEN = [
  {
    title: "FlyDevs - Internal User Administration",
    image: "/flydevs-img.png",
    description:
      "Internal user administration platform to control hours, activities, etc.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "JollyTok - Gaming Platform",
    image: "/jollytok-img.png",
    description:
      "Interactive gaming platform connected to the TikTok social network.",
    technologies: ["React", "TypeScript", "Node.js", "Firebase"],
  },
  {
    title: "TULiP - Landing Page",
    image: "/tulip-img.png",
    description:
      "Platform that connects doctors with patients in a simple and intuitive way.",
    technologies: ["React", "Tailwind CSS"],
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}

export default function ProfessionalProjects() {
  const { language } = useLanguage();
  const t = translations[language];

  const professionalProjects =
    language === "es" ? professionalProjectsES : professionalProjectsEN;

  return (
    <section id="trabajos" className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">
          {t.professionalProjects.title}
        </h2>
        <p className="text-foreground text-lg max-w-3xl mx-auto">
          {t.professionalProjects.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
        {professionalProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            language={language}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  language: Language;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-card rounded-xl overflow-hidden border border-gray-800 relative"
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      whileHover={
        !isMobile
          ? {
              scale: 1.02,
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            }
          : {}
      }
    >
      <div className="relative h-64 w-full overflow-hidden">
        <motion.div
          animate={
            !isMobile
              ? {
                  scale: isHovered ? 1.1 : 1,
                  filter: isHovered ? "brightness(0.7)" : "brightness(1)",
                }
              : {}
          }
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-fill"
          />
        </motion.div>
      </div>

      <div className="p-6">
        <motion.h3
          className="text-2xl font-bold mb-2 text-foreground"
          animate={
            !isMobile
              ? {
                  x: isHovered ? 10 : 0,
                }
              : {}
          }
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        <motion.p
          className="text-foreground mb-4"
          animate={!isMobile ? { opacity: isHovered ? 0.8 : 1 } : {}}
          transition={{ duration: 0.3 }}
        >
          {project.description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2"
          animate={!isMobile ? { y: isHovered ? -5 : 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          {project.technologies.map((tech: string, techIndex: number) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
