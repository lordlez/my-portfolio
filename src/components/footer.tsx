import Link from "next/link";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Proyectos", href: "#trabajos" },
  { name: "Proyectos Personales", href: "#proyectos" },
  { name: "Contacto", href: "#contacto" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0B14] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex-shrink-0 mb-4 sm:mb-0">
            <Link
              href="/"
              className="text-lg font-semibold text-white hover:text-gray-300 transition-colors"
            >
              Juan Pérez
            </Link>
          </div>
          <nav className="flex flex-wrap justify-center space-x-4 mb-4 sm:mb-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
