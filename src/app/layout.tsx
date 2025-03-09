"use client";

import type React from "react";
import { Inter } from "next/font/google";
import FontAwesomeConfig from "./fontawesome";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import ParticleBackground from "@/components/particle-background";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <FontAwesomeConfig />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <ParticleBackground />
            <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
