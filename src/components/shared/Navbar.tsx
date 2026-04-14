import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Navbar(){
    return(
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b bg-primary border-secondary">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
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
                <Link href="#contact">
                    <Button>Contact Me</Button>
                </Link>
            </div>
        </header>
    )
}