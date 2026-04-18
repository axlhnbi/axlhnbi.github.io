import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import ActiveSectionObserver from "@/components/shared/ActiveSectionObserver";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <ActiveSectionObserver />
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </main>
  );
}