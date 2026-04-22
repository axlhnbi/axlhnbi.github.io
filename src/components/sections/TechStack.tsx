import { TECHSTACKS } from "@/data/techstacks";

export default function TechStack() {
    return (
        <section id="techstack" className="w-full border-y border-gray-800/60 py-8 dark:bg-background-dark/50 backdrop-blur-sm">
            <p className="text-center font-mono text-foreground dark:text-gray-600 uppercase tracking-[0.3em] mb-3">
                Technologies & Tools
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 sm:gap-x-12 px-4 text-foreground dark:text-gray-400/80 font-semibold text-lg sm:text-xl transition-all">
                {TECHSTACKS.map(( tech, index ) =>(
                    <span key={index} className="hover:text-primary transition-colors cursor-default">{tech.techName}</span>
                ))}
            </div>
        </section>
    )
}