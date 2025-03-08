"use client";

import type React from "react";

import { useState, type FormEvent, useEffect, useRef } from "react";
import { Github, Instagram, Linkedin, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import esTranslations from "@/locales/es.json";
import enTranslations from "@/locales/en.json";
import type { Translations, Language } from "@/locales/types";
import { motion } from "framer-motion";

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

interface SocialIconProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const SocialIcon = ({ href, ariaLabel, children }: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-foreground hover:text-primary cursor-pointer flex items-center justify-center"
      aria-label={ariaLabel}
      whileHover={{
        scale: 1.2,
        rotate: 5,
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.a>
  );
};

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      /* Eliminar solo el fondo de autocompletado */
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active,
      textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover,
      textarea:-webkit-autofill:focus,
      textarea:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 1000px var(--background) inset !important;
        -webkit-text-fill-color: var(--foreground) !important;
        transition: background-color 5000s ease-in-out 0s;
      }
    `;
    document.head.appendChild(styleElement);

    const restoreBorders = () => {
      const inputs = document.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        const htmlElement = input as HTMLElement;
        htmlElement.style.border = "none";
      });
    };

    setTimeout(restoreBorders, 100);

    document.addEventListener("focusin", restoreBorders);
    document.addEventListener("focusout", restoreBorders);

    return () => {
      document.removeEventListener("focusin", restoreBorders);
      document.removeEventListener("focusout", restoreBorders);
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const formData = {
        name: nameInputRef.current?.value || "",
        email: emailInputRef.current?.value || "",
        message: messageInputRef.current?.value || "",
      };

      const newErrors: FormErrors = {};

      if (formData.name.length < 2) {
        newErrors.name = t.contact.nameMin;
      }

      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = t.contact.emailInvalid;
      }

      if (formData.message.length < 10) {
        newErrors.message = t.contact.messageMin;
      }

      setErrors(newErrors);
    }
  }, [
    language,
    t.contact.nameMin,
    t.contact.emailInvalid,
    t.contact.messageMin,
  ]);

  const validateForm = (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    const newErrors: FormErrors = {};

    if (formData.name.length < 2) {
      newErrors.name = t.contact.nameMin;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = t.contact.emailInvalid;
    }

    if (formData.message.length < 10) {
      newErrors.message = t.contact.messageMin;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const messageInput = form.elements.namedItem("message") as HTMLInputElement;

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    if (!validateForm(formData)) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xqaerjvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
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
          <p className="text-foreground mb-6">
            {submitStatus === "success"
              ? t.contact.success
              : t.contact.description}
          </p>

          <div className="flex items-center space-x-6 mb-8">
            <SocialIcon href="https://github.com/lordlez" ariaLabel="GitHub">
              <Github className="w-8 h-8" />
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com/in/lorenzolezcano/"
              ariaLabel="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </SocialIcon>
            <SocialIcon
              href="https://instagram.com/lordlez/"
              ariaLabel="Instagram"
            >
              <Instagram className="w-8 h-8" />
            </SocialIcon>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg">
          {submitStatus === "success" ? (
            <div className="text-center p-8">
              <p className="text-foreground mb-4">{t.contact.success}</p>
              <button
                onClick={() => setSubmitStatus(null)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors cursor-pointer"
              >
                {t.contact.another}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} method="POST" noValidate>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  {t.contact.name}
                </label>
                <div className="border border-foreground/20 rounded-md focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent">
                  <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t.contact.name}
                    className="w-full px-4 py-2 bg-background text-foreground rounded-md focus:outline-none border-none"
                    style={{ WebkitTextFillColor: "inherit", color: "inherit" }}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  {t.contact.email}
                </label>
                <div className="border border-foreground/20 rounded-md focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent">
                  <input
                    ref={emailInputRef}
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t.contact.email}
                    className="w-full px-4 py-2 bg-background text-foreground rounded-md focus:outline-none border-none"
                    style={{ WebkitTextFillColor: "inherit", color: "inherit" }}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  {t.contact.message}
                </label>
                <div className="border border-foreground/20 rounded-md focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent">
                  <textarea
                    ref={messageInputRef}
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t.contact.message}
                    className="w-full px-4 py-2 bg-background text-foreground rounded-md focus:outline-none border-none"
                    style={{ WebkitTextFillColor: "inherit", color: "inherit" }}
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center justify-center gap-2 text-lg cursor-pointer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {isSubmitting ? (
                  t.contact.sending
                ) : (
                  <>
                    {t.contact.send} <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>

              {submitStatus === "error" && (
                <p className="mt-4 text-red-400 text-sm">{t.contact.error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
