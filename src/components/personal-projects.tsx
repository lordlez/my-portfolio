import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const personalProjects = [
  {
    title: "Portfolio Personal",
    image: "/placeholder.svg?height=300&width=500",
    description: "Mi sitio web personal construido con Next.js y Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/username/portfolio",
  },
  {
    title: "Aplicación de Clima",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Aplicación que muestra el clima actual y pronóstico utilizando APIs.",
    technologies: ["React", "OpenWeather API", "CSS Modules"],
    demoUrl: "https://weather.example.com",
    githubUrl: "https://github.com/username/weather-app",
  },
  {
    title: "Gestor de Tareas",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Aplicación de gestión de tareas con autenticación y almacenamiento en la nube.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/username/task-manager",
  },
  {
    title: "Blog Personal",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Blog personal con sistema de gestión de contenidos basado en Markdown.",
    technologies: ["Next.js", "MDX", "Tailwind CSS"],
    demoUrl: "https://blog.example.com",
    githubUrl: "https://github.com/username/blog",
  },
];

export default function PersonalProjects() {
  return (
    <section id="proyectos" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Proyectos Personales</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Proyectos que he desarrollado en mi tiempo libre para aprender nuevas
          tecnologías y mejorar mis habilidades.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalProjects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0A0B14] rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  <ExternalLink size={18} /> Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
                >
                  <Github size={18} /> Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
