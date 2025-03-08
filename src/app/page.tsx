import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import ProfessionalProjects from "@/components/professional-projects";
import PersonalProjects from "@/components/personal-projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar className="mb-52" />
      <Hero className="mb-40" />
      <Skills className="mb-40" />
      <ProfessionalProjects className="mb-40" />
      <PersonalProjects className="mb-40" />
      <Contact />
      <Footer />
    </main>
  );
}
