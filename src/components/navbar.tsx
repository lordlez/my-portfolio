"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full z-10 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="#inicio"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#habilidades"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Habilidades
              </Link>
              <Link
                href="#trabajos"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Proyectos
              </Link>
              <Link
                href="#proyectos"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Proyectos Personales
              </Link>
              <Link
                href="#contacto"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
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
              className="block py-2 text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="#habilidades"
              className="block py-2 text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              Habilidades
            </Link>
            <Link
              href="#trabajos"
              className="block py-2 text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              Proyectos
            </Link>
            <Link
              href="#proyectos"
              className="block py-2 text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              Proyectos Personales
            </Link>
            <Link
              href="#contacto"
              className="block py-2 text-gray-300 hover:text-white"
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
