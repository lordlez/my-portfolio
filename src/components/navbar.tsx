"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [language, setLanguage] = useState("es");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <nav className="bg-transparent fixed w-full z-10 py-2 backdrop-filter backdrop-blur-md bg-background/70 sticky top-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe size={24} />
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#inicio"
              className="text-foreground hover:text-gray-500 transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#habilidades"
              className="text-foreground hover:text-gray-500 transition-colors"
            >
              Habilidades
            </Link>
            <Link
              href="#trabajos"
              className="text-foreground hover:text-gray-500 transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#proyectos"
              className="text-foreground hover:text-gray-500 transition-colors"
            >
              Proyectos Personales
            </Link>
            <Link
              href="#contacto"
              className="text-foreground hover:text-gray-500 transition-colors"
            >
              Contacto
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary cursor-pointer"
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
              Inicio
            </Link>
            <Link
              href="#habilidades"
              className="block py-2 text-foreground hover:text-gray-500"
              onClick={toggleMenu}
            >
              Habilidades
            </Link>
            <Link
              href="#trabajos"
              className="block py-2 text-foreground hover:text-gray-500"
              onClick={toggleMenu}
            >
              Proyectos
            </Link>
            <Link
              href="#proyectos"
              className="block py-2 text-foreground hover:text-gray-500"
              onClick={toggleMenu}
            >
              Proyectos Personales
            </Link>
            <Link
              href="#contacto"
              className="block py-2 text-foreground hover:text-gray-500"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
