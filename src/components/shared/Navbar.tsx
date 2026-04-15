"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return(
        <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-background border-secondary">
            <div className="md:hidden flex px-4 py-4 items-center relative">
                <button
                    className="text-gray-300 hover:text-white focus:outline-none"
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
                            src="/images/logo.svg"
                            alt="logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                    <nav className="space-x-8 text-sm font-medium text-gray-300">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
                        <Link href="#about" className="hover:text-white transition-colors">About Me</Link>
                        <Link href="#blog" className="hover:text-white transition-colors">Blog</Link>
                        <Link href="#youtube" className="hover:text-white transition-colors">Youtube</Link>
                    </nav>
                </div>
                <div className="hidden md:block">
                    <Link href="#contact">
                        <Button variant="outline" size="sm">Contact Me</Button>
                    </Link>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-background border-b border-secondary">
                    <nav className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-gray-100">
                        <Link href="/" onClick={closeMenu} className="hover:text-gray-600 transition-colors">Home</Link>
                        <Link href="#projects" onClick={closeMenu} className="hover:text-gray-600 transition-colors">Projects</Link>
                        <Link href="#about" onClick={closeMenu} className="hover:text-gray-600 transition-colors">About Me</Link>
                        <Link href="#blog" onClick={closeMenu} className="hover:text-gray-600 transition-colors">Blog</Link>
                        <Link href="#youtube" onClick={closeMenu} className="hover:text-gray-600 transition-colors">Youtube</Link>
                    </nav>
                </div>
            )}
        </header>
    )
}