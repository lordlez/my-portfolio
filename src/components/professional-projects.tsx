import Image from "next/image";

const professionalProjects = [
  {
    title: "E-commerce Platform",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Plataforma de comercio electrónico con sistema de pagos integrado y gestión de inventario en tiempo real.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "CRM Dashboard",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Dashboard interactivo para gestión de relaciones con clientes, con análisis de datos y reportes personalizados.",
    technologies: ["Angular", "Express", "PostgreSQL", "Chart.js"],
  },
  {
    title: "Fintech App",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Aplicación móvil para gestión financiera personal con integración de múltiples cuentas bancarias y criptomonedas.",
    technologies: ["React Native", "Firebase", "Redux", "Plaid API"],
  },
  {
    title: "Real Estate Platform",
    image: "/placeholder.svg?height=300&width=500",
    description:
      "Plataforma para búsqueda y gestión de propiedades inmobiliarias con mapas interactivos y tours virtuales.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Mapbox"],
  },
];

export default function ProfessionalProjects() {
  return (
    <section id="trabajos" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Proyectos Profesionales</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Proyectos en los que he trabajado profesionalmente, aplicando mis
          conocimientos y habilidades para crear soluciones innovadoras.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {professionalProjects.map((project, index) => (
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
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
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
