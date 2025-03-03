"use client";

import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import FontAwesomeConfig from "./fontawesome";
import { ThemeProvider } from "@/context/ThemeContext";

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
          {" "}
          <div className="min-h-screen bg-background text-foreground p-4 md:p-8">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
