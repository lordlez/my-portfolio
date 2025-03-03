"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { Translations, Language } from "@/locales/types";

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

const skills = [
  { name: "HTML", icon: faHtml5, color: "text-orange-400" },
  { name: "CSS", icon: faCss3Alt, color: "text-blue-400" },
  { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
  { name: "React", icon: faReact, color: "text-cyan-400" },
  { name: "Next.js", icon: faReact, color: "text-white" },
  { name: "Node.js", icon: faNodeJs, color: "text-green-500" },
  { name: "SQL", icon: faDatabase, color: "text-blue-400" },
  { name: "Git", icon: faGitAlt, color: "text-orange-500" },
];

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="habilidades" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{t.skills.title}</h2>
        <p className="text-foreground text-lg max-w-3xl mx-auto">
          {t.skills.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-lg border border-gray-800 bg-card flex flex-col items-center justify-center hover:border-gray-700 transition-colors"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className={`${skill.color}`}
              size="3x"
            />
            <h3 className="text-lg font-medium text-foreground mt-4">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
