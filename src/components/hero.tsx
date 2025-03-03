"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { Translations, Language } from "@/locales/types";

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="inicio" className="pt-28 pb-16 max-w-7xl mx-auto px-4 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8">
          <div className="max-w-2xl flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 text-blue-400">
              {t.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              {t.hero.subtitle}
            </h2>
            <p className="text-foreground mb-8 max-w-xl">
              {t.hero.description}
            </p>
            <div className="flex space-x-4">
              <a
                href="#contacto"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                {t.hero.contact}
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-gray-600 text-foreground hover:bg-gray-200 rounded-md transition-colors flex items-center gap-2"
              >
                <Download size={18} /> {t.hero.downloadCV}
              </a>
            </div>
          </div>
          <div className="md:block mt-8 md:mt-0 flex-shrink-0">
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-gray-600 shadow-lg">
              <Image
                src="/ejemplo-perfil.jpg"
                alt="Foto de perfil de Lorenzo Lezcano"
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
