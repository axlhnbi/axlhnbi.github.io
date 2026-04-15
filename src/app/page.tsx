import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex-col">
      <section className="min-h-[80vh] flex flex-col justify-center items-start">
        <p className="text-primary font-mono text-sm sm:text-base mb-4 tracking-wide">
          &gt; Hello World, I'm
        </p>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4">
          Axl Hanuebi.
        </h1>
        
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-500 mb-8">
          Proven Front-End Expertise.
        </h2>
        <h3 className="text-gray-50 sm:text-xl max-w-2xl leading-relaxed text-lg mb-2">Full-Stack Capabilities.</h3>
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed">
          Experienced in building scalable mobile apps with Ionic Angular. Beyond my core front-end roles, I architect end-to-end personal projects combining Next.js 16, and Python.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button size="lg" variant="primary">
            Explore My Work
          </Button>
          <Button size="lg" variant="outline">
            Contact Me
          </Button>
        </div>
      </section>

      <section className="w-full border-y border-gray-800/60 py-8 bg-background/50 backdrop-blur-sm">
        <p className="text-center font-mono text-gray-600 uppercase tracking-[0.3em] mb-3">
          Technologies & Tools
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 sm:gap-x-12 px-4 text-gray-400/80 font-semibold text-lg sm:text-xl transition-all">
          <span className="hover:text-primary transition-colors cursor-default">Ionic Angular</span>
          <span className="hover:text-primary transition-colors cursor-default">Next.js 16</span>
          <span className="hover:text-primary transition-colors cursor-default">Python</span>
          <span className="hover:text-primary transition-colors cursor-default">HTML</span>
          <span className="hover:text-primary transition-colors cursor-default">CSS</span>
          <span className="hover:text-primary transition-colors cursor-default">JS</span>
          <span className="hover:text-primary transition-colors cursor-default">SQL</span>
        </div>
      </section>
    </main>
  );
}