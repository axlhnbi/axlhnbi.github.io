import Button from "@/components/ui/Button";

export default function Home() {
  return (
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
        Experienced in building scalable mobile apps with Ionic and Angular. Beyond my core front-end roles, I architect end-to-end personal projects combining Next.js, React, and Python backends.
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
  );
}