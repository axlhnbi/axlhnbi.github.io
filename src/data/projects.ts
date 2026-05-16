export interface Project {
    title: string,
    description: string,
    techStack: string[],
    imageUrl?: string,
    githubUrl?: string,
    liveUrl?: string
}

export const PROJECTS: Project[] = [
    {
        title: "RinciUang",
        description: "Available exclusively on Android. A cross-platform financial tracker engineered for speed and a frictionless user experience. It features a robust data architecture and a sleek, modern UI that is fully optimized for production.",
        techStack: ["Ionic", "Angular", "PHP"],
        imageUrl: "https://seashell-gazelle-908805.hostingersite.com/img/finflow-mobile-dashboard.webp", 
        liveUrl: "https://play.google.com/store/apps/details?id=com.axlhnbi.finflow",
        githubUrl: "https://github.com/axlhnbi/finflow"
    },
    {
        title: "Automated Face Recognition Lock",
        description: "A smart hardware security system powered by real-time facial recognition. It processes visual data through computer vision to authenticate users and securely manage physical access.",
        techStack: ["Python", "OpenCV", "Raspberry Pi"],
        imageUrl: "https://seashell-gazelle-908805.hostingersite.com/img/face-recognition-system-demo.webp",
        liveUrl: "https://www.youtube.com/watch?v=lZdOjA3wDoU",
        githubUrl: "https://github.com/axlhnbi/face-recognition-to-open-door"
    }
]