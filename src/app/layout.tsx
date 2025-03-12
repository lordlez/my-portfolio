"use client";

import type React from "react";
import { Poppins } from "next/font/google";
import FontAwesomeConfig from "./fontawesome";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import ParticleBackground from "@/components/particle-background";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <FontAwesomeConfig />
      </head>
      <body className={poppins.className}>
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
