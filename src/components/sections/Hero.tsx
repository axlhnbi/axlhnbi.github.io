import Link from "next/link";
import Button from "@/components/ui/Button";
import { HERO } from "@/data/hero";

export default function Hero() {
    return(
        <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-start">
            <p className="text-primary font-mono text-sm sm:text-base mb-4 tracking-wide">
            &gt; Hello World, I'm
            </p>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4">
            {HERO.name}
            </h1>
            
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-500 mb-8">
            {HERO.tagline}
            </h2>
            <h3 className="text-gray-50 sm:text-xl max-w-2xl leading-relaxed text-lg mb-2">{HERO.subTagline}</h3>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed">
            {HERO.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="#projects" className="w-full sm:w-auto">
                <Button size="lg" variant="primary" className="w-full">Explore My Work</Button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full">Contact Me</Button>
            </Link>
            </div>
        </section>
    )
}