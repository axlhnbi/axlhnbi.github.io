import ProjectCard from "../ui/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function FeaturedProjects() {
    return (
        <section id="projects" className="w-full max-w-6xl mx-auto px-4 pt-12 sm:py-32 flex flex-col gap-16">
            <div className="flex flex-col gap-2">
                <p className="text-primary font-mono text-sm uppercase tracking-widest">
                &gt; Portofolio
                </p>
                <h2 className="text-4xl sm:text-5xl">
                Featured Projects.
                </h2>
            </div>
            <div className="flex flex-col gap-12 sm:gap-24">
                { PROJECTS.map(( project, index ) => (
                <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    imageUrl={project.imageUrl}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                />
                ))}
            </div>
        </section>
    )
}