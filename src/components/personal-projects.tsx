"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import type { Translations, Language } from "@/locales/types";

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

const personalProjectsES = [
  {
    title: "GuitarLA",
    image: "/guitarla-img.png",
    description: "Plataforma de ventas de guitarras.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://shopping-cart-lordlez.netlify.app/",
    githubUrl: "https://github.com/lordlez/shopping-cart",
  },
  {
    title: "Documentación de C",
    image: "/c-img.png",
    description:
      "El objetivo de este proyecto fue simular un sitio web técnico que brinda información sobre el lenguaje de programación C.",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://lordlez.github.io/documentacion-C/",
    githubUrl: "https://github.com/lordlez/documentacion-C",
  },
  {
    title: "Pokédex",
    image: "/pokedex-img.png",
    description:
      "El proyecto consiste en una aplicación que, usando la API de Pokémon, permite al usuario ingresar un número o nombre de un Pokémon para obtener su imagen.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://lordlez.github.io/pokedexProject/",
    githubUrl: "https://github.com/lordlez/pokedexProject",
  },
  {
    title: "Blog de Café",
    image: "/cafe-img.png",
    description:
      "El objetivo de este proyecto fue crear un sitio web de informacion, venta y contacto con temática de café",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://lordlez.github.io/BlogCafe/",
    githubUrl: "https://github.com/lordlez/BlogCafe",
  },
];

const personalProjectsEN = [
  {
    title: "GuitarLA",
    image: "/guitarla-img.png",
    description: "Guitar sales platform.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://shopping-cart-lordlez.netlify.app/",
    githubUrl: "https://github.com/lordlez/shopping-cart",
  },
  {
    title: "Documentation of C",
    image: "/c-img.png",
    description:
      "The goal of this project was to simulate a technical website that provides information about the C programming language.",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://lordlez.github.io/documentacion-C/",
    githubUrl: "https://github.com/lordlez/documentacion-C",
  },
  {
    title: "Pokédex",
    image: "/pokedex-img.png",
    description:
      "The project consists of an application that, using the Pokémon API, allows the user to enter a Pokémon number or name to obtain its image.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://lordlez.github.io/pokedexProject/",
    githubUrl: "https://github.com/lordlez/pokedexProject",
  },
  {
    title: "Coffee Blog",
    image: "/cafe-img.png",
    description:
      "The goal of this project was to create an information, sale and contact website with a coffee theme",
    technologies: ["HTML", "CSS"],
    demoUrl: "https://lordlez.github.io/BlogCafe/",
    githubUrl: "https://github.com/lordlez/BlogCafe",
  },
];

// Hook para detectar si es un dispositivo móvil
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para verificar si es móvil basado en el ancho de la ventana
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar al inicio
    checkIsMobile();

    // Agregar listener para cambios de tamaño de ventana
    window.addEventListener("resize", checkIsMobile);

    // Limpiar listener
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}

export default function PersonalProjects() {
  const { language } = useLanguage();
  const t = translations[language];

  const personalProjects =
    language === "es" ? personalProjectsES : personalProjectsEN;

  return (
    <section id="proyectos" className="max-w-7xl mx-auto px-4 py-16">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">{t.personalProjects.title}</h2>
        <p className="text-foreground text-lg max-w-3xl mx-auto">
          {t.personalProjects.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16">
        {personalProjects.map((project, index) => (
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
  language,
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

        {/* Botones para móvil (siempre visibles) */}
        {isMobile && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="flex gap-4">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <ExternalLink size={18} /> Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
              >
                <Github size={18} /> {language === "es" ? "Código" : "Code"}
              </a>
            </div>
          </div>
        )}

        {/* Botones para desktop (solo visibles al hacer hover) */}
        {!isMobile && (
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex gap-4">
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <ExternalLink size={18} /> Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <Github size={18} /> {language === "es" ? "Código" : "Code"}
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>

      <div className="p-6">
        <motion.h3
          className="text-2xl font-bold mb-2 text-foreground"
          animate={
            !isMobile
              ? {
                  x: isHovered ? 10 : 0,
                  color: isHovered ? "#6366f1" : "currentColor",
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
          className="flex flex-wrap gap-2 mb-6"
          animate={!isMobile ? { y: isHovered ? -5 : 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          {project.technologies.map((tech: string, techIndex: number) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
              whileHover={
                !isMobile ? { scale: 1.1, backgroundColor: "#4f46e5" } : {}
              }
              transition={{ duration: 0.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
