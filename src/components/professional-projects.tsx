import Image from "next/image";

const professionalProjects = [
  {
    title: "E-commerce Platform",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React", "Node.js", "MongoDB"],
    description:
      "Plataforma de comercio electrónico con sistema de pagos integrado.",
  },
  {
    title: "CRM Dashboard",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Angular", "Express", "PostgreSQL"],
    description: "Dashboard para gestión de relaciones con clientes.",
  },
  {
    title: "Fintech App",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Firebase", "Redux"],
    description: "Aplicación móvil para gestión financiera personal.",
  },
  {
    title: "Real Estate Platform",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    description:
      "Plataforma para búsqueda y gestión de propiedades inmobiliarias.",
  },
];

export default function ProfessionalProjects() {
  return (
    <section id="trabajos" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Proyectos Profesionales</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Proyectos en los que he trabajado profesionalmente, aplicando mis
          conocimientos y habilidades.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {professionalProjects.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/20 transition-all"
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-foreground/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
