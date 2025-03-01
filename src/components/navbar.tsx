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
    <nav className="bg-card/80 backdrop-blur-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold gradient-text">
              Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="#inicio"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Inicio
              </Link>
              <Link
                href="#habilidades"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Habilidades
              </Link>
              <Link
                href="#trabajos"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Trabajos
              </Link>
              <Link
                href="#proyectos"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Proyectos
              </Link>
              <Link
                href="#contacto"
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#inicio"
              className="block px-3 py-2 text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="#habilidades"
              className="block px-3 py-2 text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              Habilidades
            </Link>
            <Link
              href="#trabajos"
              className="block px-3 py-2 text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              Trabajos
            </Link>
            <Link
              href="#proyectos"
              className="block px-3 py-2 text-foreground/80 hover:text-primary"
              onClick={toggleMenu}
            >
              Proyectos
            </Link>
            <Link
              href="#contacto"
              className="block px-3 py-2 text-foreground/80 hover:text-primary"
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
