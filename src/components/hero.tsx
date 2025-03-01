import Image from "next/image";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-16 max-w-7xl mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 text-blue-400">
              Juan Pérez
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Desarrollador Full Stack
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam. Magna etiam tempor orci
              eu lobortis elementum nibh.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contacto"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Contáctame
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-gray-600 text-white hover:bg-gray-800 rounded-md transition-colors flex items-center gap-2"
              >
                <Download size={18} /> Descargar CV
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-600">
              <Image
                src="/placeholder.svg?height=100&width=100"
                alt="Foto de perfil"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
