import { EXPERIENCES } from "@/data/experiences";
import { Globe } from "lucide-react"; 

export default function Experience() {
    const formatDuration = (start: number, end: number | "Present") => {
        const endYearForMath = end === "Present" ? new Date().getFullYear() : end;
        
        let years = endYearForMath - start;

        if(years === 0) years = 1;

        const durationText = years > 1 ? `${years} Years` : `${years} Year`;

        return `${start} - ${end} • ${durationText}`;
    }

    return (
        <section id="experience" className="w-full max-w-4xl mx-auto px-4 pt-12 sm:pb-32 flex flex-col gap-12">
            <div className="flex flex-col gap-2">
                <p className="text-primary font-mono text-sm uppercase tracking-widest">
                &gt; Experience
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground dark:text-foreground-dark">
                Professional Journey.
                </h2>
            </div>

            <div className="space-y-12">
                {EXPERIENCES.map((exp, index) => (
                <div 
                    key={index}
                    className="dark:bg-gray-900/20 border border-gray-800/60 rounded-2xl p-6 sm:p-10 transition-all dark:hover:bg-gray-900/40 hover:border-gray-700"
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-gray-800/60 pb-8">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-foreground-dark">
                        {exp.role}
                        </h3>
                        <p className="text-xl text-foregroun dark:text-gray-400 mt-2 font-medium">
                        {exp.company}
                        </p>
                        {exp.companyUrl && 
                            <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-foreground dark:text-gray-500 hover:text-primary transition-colors font-mono"
                            >
                                <Globe className="w-4 h-4" strokeWidth={1.5} />
                                {exp.companyUrl}
                            </a>
                        }
                    </div>
                    
                    <div className="text-left md:text-right">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-mono text-sm rounded-full border border-primary/20">
                        {formatDuration(exp.startYear, exp.endYear)}
                        </span>
                    </div>
                    </div>

                    <ul className="space-y-6 text-foreground dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                    {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                        <span className="text-primary mt-1 text-xl">▹</span>
                        <p>{item}</p>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
        </section>
    )
}