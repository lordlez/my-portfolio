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
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

interface SkillsProps {
  className?: string;
}

export default function Skills({ className }: SkillsProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="habilidades"
      className={`max-w-7xl mx-auto px-4 py-16 ${className}`}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{t.skills.title}</h2>
        <p className="text-foreground text-lg max-w-3xl mx-auto">
          {t.skills.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg border border-gray-800 bg-card flex flex-col items-center justify-center relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0"
              whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <FontAwesomeIcon
              icon={skill.icon}
              className={`${skill.color} hover:scale-110 transition-transform`}
              size="3x"
            />
            <h3 className="text-lg font-medium text-foreground mt-4 relative z-10">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
