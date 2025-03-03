"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import type { Translations, Language } from "@/locales/types";

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

export default function ProfessionalProjects() {
  const { language } = useLanguage();
  const t = translations[language];

  const professionalProjects =
    language === "es" ? professionalProjectsES : professionalProjectsEN;

  return (
    <section id="trabajos" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          {t.professionalProjects.title}
        </h2>
        <p className="text-foreground text-lg max-w-3xl mx-auto">
          {t.professionalProjects.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {professionalProjects.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-fill"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {project.title}
              </h3>
              <p className="text-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
