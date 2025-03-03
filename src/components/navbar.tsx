"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import type { Translations, Language } from "@/locales/types";

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-10 py-2 backdrop-filter backdrop-blur-md bg-background/70 sticky top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleDarkMode}
              className="text-foreground hover:text-primary transition-colors cursor-pointer p-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="text-foreground hover:text-primary transition-colors cursor-pointer flex items-center"
              aria-label="Toggle language"
            >
              <span
                className={`text-2xl ${
                  language === "es" ? "opacity-100" : "opacity-50"
                } transition-opacity`}
              >
                🇪🇸
              </span>
              <span className="mx-[2px]">/</span>
              <span
                className={`text-2xl ${
                  language === "en" ? "opacity-100" : "opacity-50"
                } transition-opacity`}
              >
                🇬🇧
              </span>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#inicio"
              className="text-foreground hover:text-gray-500 transition-colors"
            >
              {t.navbar.home}
            </Link>
            <Link
              href="#habilidades"
              className="text-foreground hover:text-gray-500 transition-colors"
            >
              {t.navbar.skills}
            </Link>
            <Link
              href="#trabajos"
              className="text-foreground hover:text-gray-500 transition-colors"
            >
              {t.navbar.projects}
            </Link>
            <Link
              href="#proyectos"
              className="text-foreground hover:text-gray-500 transition-colors"
            >
              {t.navbar.personalProjects}
            </Link>
            <Link
              href="#contacto"
              className="text-foreground hover:text-gray-500 transition-colors"
            >
              {t.navbar.contact}
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary cursor-pointer p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm mt-2">
          <div className="px-4 py-2">
            <Link
              href="#inicio"
              className="block py-2 text-foreground hover:text-gray-500"
              onClick={toggleMenu}
            >
              {t.navbar.home}
            </Link>
            <Link
              href="#habilidades"
              className="block py-2 text-foreground hover:text-gray-500"
              onClick={toggleMenu}
            >
              {t.navbar.skills}
            </Link>
            <Link
              href="#trabajos"
              className="block py-2 text-foreground hover:text-gray-500"
              onClick={toggleMenu}
            >
              {t.navbar.projects}
            </Link>
            <Link
              href="#proyectos"
              className="block py-2 text-foreground hover:text-gray-500"
              onClick={toggleMenu}
            >
              {t.navbar.personalProjects}
            </Link>
            <Link
              href="#contacto"
              className="block py-2 text-foreground hover:text-gray-500"
              onClick={toggleMenu}
            >
              {t.navbar.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
