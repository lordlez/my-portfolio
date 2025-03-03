"use client";

import type React from "react";
import { useState } from "react";
import { Github, Instagram, Linkedin, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import { Translations, Language } from "@/locales/types";

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const { language } = useLanguage();
  const t = translations[language];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí usaríamos Formspree
      const response = await fetch(
        "https://formspree.io/f/tu-id-de-formspree",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="container-section max-w-7xl mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-4xl font-bold mb-4">{t.contact.title}</h3>
          <p className="text-foreground mb-6">{t.contact.description}</p>

          <div className="flex items-center space-x-6 mb-8">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.contact.name}
                className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.contact.email}
                className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                {t.contact.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t.contact.message}
                className="w-full px-4 py-2 bg-background border border-foreground/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center gap-2 text-lg cursor-pointer"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  {t.contact.send} <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <p className="mt-4 text-green-400 text-sm">{t.contact.success}</p>
            )}

            {submitStatus === "error" && (
              <p className="mt-4 text-red-400 text-sm">{t.contact.error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
