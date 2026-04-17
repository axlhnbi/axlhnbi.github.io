import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <Experience />
    </main>
  );
}