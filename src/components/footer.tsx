"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { Translations, Language } from "@/locales/types";

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

const navLinks = [
  { name: "home", href: "#inicio" },
  { name: "skills", href: "#habilidades" },
  { name: "projects", href: "#trabajos" },
  { name: "personalProjects", href: "#proyectos" },
  { name: "contact", href: "#contacto" },
];

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex-shrink-0 mb-4 sm:mb-0">
            <Link href="/" className="transition-colors">
              <p className="text-sm text-foreground hover:text-primary transition-colors">
                {t.footer.copyright.replace("{year}", currentYear.toString())}
              </p>
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center space-x-4 mb-4 sm:mb-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-foreground hover:text-primary transition-colors"
              >
                {t.navbar[link.name as keyof typeof t.navbar]}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
