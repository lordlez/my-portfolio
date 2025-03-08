"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import type { Translations, Language } from "@/locales/types";
import { motion } from "framer-motion";

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

type AnimatedLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
};

const AnimatedLink = ({ href, children, onClick }: AnimatedLinkProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    onClick();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Link
        href={href}
        className="relative text-foreground hover:text-[#0079f0] transition-colors pb-1"
        onClick={handleClick}
      >
        {children}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-[#0079f0]"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </Link>
    </motion.div>
  );
};

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-transparent w-full z-10 py-2 backdrop-filter backdrop-blur-md bg-background/70 sticky top-0 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={toggleDarkMode}
              className="text-foreground hover:text-[#0079f0] transition-colors cursor-pointer p-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="text-foreground hover:text-[#0079f0] transition-colors cursor-pointer flex items-center"
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
            <AnimatedLink href="#inicio" onClick={() => setIsMenuOpen(false)}>
              {t.navbar.home}
            </AnimatedLink>
            <AnimatedLink
              href="#habilidades"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.navbar.skills}
            </AnimatedLink>
            <AnimatedLink href="#trabajos" onClick={() => setIsMenuOpen(false)}>
              {t.navbar.projects}
            </AnimatedLink>
            <AnimatedLink
              href="#proyectos"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.navbar.personalProjects}
            </AnimatedLink>
            <AnimatedLink href="#contacto" onClick={() => setIsMenuOpen(false)}>
              {t.navbar.contact}
            </AnimatedLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-[#0079f0] cursor-pointer p-2"
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
            <AnimatedLink href="#inicio" onClick={toggleMenu}>
              {t.navbar.home}
            </AnimatedLink>
            <AnimatedLink href="#habilidades" onClick={toggleMenu}>
              {t.navbar.skills}
            </AnimatedLink>
            <AnimatedLink href="#trabajos" onClick={toggleMenu}>
              {t.navbar.projects}
            </AnimatedLink>
            <AnimatedLink href="#proyectos" onClick={toggleMenu}>
              {t.navbar.personalProjects}
            </AnimatedLink>
            <AnimatedLink href="#contacto" onClick={toggleMenu}>
              {t.navbar.contact}
            </AnimatedLink>
          </div>
        </div>
      )}
    </nav>
  );
}
