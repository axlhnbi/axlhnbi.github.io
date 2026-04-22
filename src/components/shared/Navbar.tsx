"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return(
        <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-background dark:bg-background-dark">
            <div className="md:hidden flex px-4 py-4 items-center relative">
                <button
                    className="text-foreground hover:text-primary focus:outline-none hover:cursor-pointer dark:text-gray-300"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}

                </button>
            </div>
            <div className="hidden md:flex container mx-auto px-6 py-4 justify-between items-center">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center mr-8">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={60}
                            height={60}
                            className="object-contain w-15 h-auto dark:hidden"
                        />
                        <Image
                            src="/images/logo-dark.png"
                            alt="logo"
                            width={60}
                            height={60}
                            className="object-contain w-15 h-auto hidden dark:block"
                        />
                    </Link>
                    <nav className="space-x-8 text-sm font-medium text-foreground dark:text-gray-300">
                        <Link href="/" className="hover:text-primary hover:border-b transition-colors">Home</Link>
                        <Link href="#projects" className="hover:text-primary hover:border-b transition-colors">Projects</Link>
                        <Link href="#experience" className="hover:text-primary hover:border-b transition-colors">Experience</Link>
                    </nav>
                </div>
                <div className="hidden md:block">
                    <Link href="#contact">
                        <Button variant="outline" size="sm">Contact Me</Button>
                    </Link>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-background dark:bg-background-dark">
                    <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-foreground dark:text-foreground-dark">
                        <Link href="/" onClick={closeMenu} className="hover:text-primary transition-colors">Home</Link>
                        <Link href="#projects" onClick={closeMenu} className="hover:text-primary transition-colors">Projects</Link>
                        <Link href="#experience" onClick={closeMenu} className="hover:text-primary transition-colors">Experience</Link>
                        <Link href="#contact" onClick={closeMenu} className="hover:text-primary transition-colors">Contact Me</Link>
                    </nav>
                </div>
            )}
            <div className="absolute top-3 right-3">
                <ThemeToggle />
            </div>
        </header>
    )
}