"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

interface ProjectCardProps {
    title: string,
    description: string, 
    techStack: string[],
    imageUrl?: string,
    githubUrl?: string;
    liveUrl?: string; 
}

export default function ProjectCard({
    title,
    description,
    techStack,
    imageUrl,
    githubUrl,
    liveUrl
}: ProjectCardProps){
    const fallbackImage = "/images/no-image.png";
    const [imgSrc, setImgSrc] = useState(imageUrl || fallbackImage);
    return(
        <div className="group flex flex-col md:flex-row gap-8 items-center bg-gray-900/20 border border-gray-800/60 rounded-2xl p-4 sm:p-6 transition-all hover:border-gray-700">
            <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-xl bg-gray-800">
                <Image 
                    src={imgSrc}
                    alt={`Screenshot of ${title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={() => setImgSrc(fallbackImage)}
                    className="object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
            </div>
            <div className="w-full md:w-/2 flex flex-col items-start">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {techStack.map((tech, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full border border-primary/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4 w-full sm:w-auto">
                    {
                        liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="sm" fullWidth>Live Preview</Button>
                            </a>
                        )
                    }
                    {
                        githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="sm" variant="outline" fullWidth>Source Code</Button>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
    )
}