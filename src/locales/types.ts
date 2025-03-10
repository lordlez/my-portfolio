export interface Translations {
  navbar: {
    home: string;
    skills: string;
    projects: string;
    personalProjects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    contact: string;
    downloadCV: string;
  };
  skills: {
    title: string;
    description: string;
  };
  professionalProjects: {
    title: string;
    description: string;
  };
  personalProjects: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
    success: string;
    error: string;
    another: string;
    nameMin: string;
    emailInvalid: string;
    messageMin: string;
    sending: string;
  };
  footer: {
    copyright: string;
  };
}

export type Language = "es" | "en";
