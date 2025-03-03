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
                className="object-fill"
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
