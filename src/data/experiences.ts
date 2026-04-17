export interface Experience {
    role: string,
    company: string,
    companyUrl: string,
    startYear: number,
    endYear: number | "Present"
    description: string[]
};

export const EXPERIENCES: Experience[] = [
    {
        role: "Front-End Engineer",
        company: "PT. Eannovate Creative Technology",
        companyUrl: "https://www.eannovate.com/",
        startYear: 2020,
        endYear: "Present",
        description: [
            "Spearheaded the front-end architecture and development of cross-platform mobile applications using the Ionic framework and Angular.",
            "Translated complex requirements into highly performant, responsive interfaces, ensuring a consistent user experience across both iOS and Android ecosystems.",
            "Maintained and scaled production-ready codebases over a 5-year lifecycle, demonstrating strong principles in clean code and long-term project maintainability."
        ]
    }
];