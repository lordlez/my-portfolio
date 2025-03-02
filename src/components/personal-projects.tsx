"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import type { Translations, Language } from "@/locales/types";

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

const personalProjectsES = [
  {
    title: "Portfolio Personal",
    image: "/placeholder.svg?height=300&width=500",
    description: "Mi sitio web personal construido con Next.js y Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio",
  },
  {
    title: "Aplicación de Clima",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Aplicación que muestra el clima actual y pronóstico utilizando APIs.",
    technologies: ["React", "OpenWeather API", "CSS Modules"],
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/username/weather-app",
  },
  {
    title: "Gestor de Tareas",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Aplicación de gestión de tareas con autenticación y almacenamiento en la nube.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/username/task-manager",
  },
  {
    title: "Blog Personal",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Blog personal con sistema de gestión de contenidos basado en Markdown.",
    technologies: ["Next.js", "MDX", "Tailwind CSS"],
    demoUrl: "https://blog.example.com",
    githubUrl: "https://github.com/username/blog",
  },
];

const personalProjectsEN = [
  {
    title: "Personal Portfolio",
    image: "/placeholder.svg?height=300&width=500",
    description: "My personal website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio",
  },
  {
    title: "Weather App",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Application that displays current weather and forecast using APIs.",
    technologies: ["React", "OpenWeather API", "CSS Modules"],
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/username/weather-app",
  },
  {
    title: "Task Manager",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Task management application with authentication and cloud storage.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/username/task-manager",
  },
  {
    title: "Personal Blog",
    image: "/placeholder.svg?height=300&width=500",
    description: "Personal blog with Markdown-based content management system.",
    technologies: ["Next.js", "MDX", "Tailwind CSS"],
    demoUrl: "https://blog.example.com",
    githubUrl: "https://github.com/username/blog",
  },
];

export default function PersonalProjects() {
  const { language } = useLanguage();
  const t = translations[language];

  const personalProjects =
    language === "es" ? personalProjectsES : personalProjectsEN;

  return (
    <section id="proyectos" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{t.personalProjects.title}</h2>
        <p className="text-foreground text-lg max-w-3xl mx-auto">
          {t.personalProjects.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalProjects.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {project.title}
              </h3>
              <p className="text-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black border border-foreground rounded-lg font-medium hover:bg-gray-200 transition-colors"
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
          </div>
        ))}
      </div>
    </section>
  );
}
