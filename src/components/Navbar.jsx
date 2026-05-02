import { use, useEffect, useState } from "react";
import { cn } from "../lib/utils";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={cn("fixed top-0 w-full z-40 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent")}>
            <div className="container mx-auto px-8 py-7">
                <div className="flex items-center justify-between px-2">

                    <div className="text-2xl font-bold text-glow">My <span className="text-blue-500">Portfolio</span></div>
                    <div className="space-x-6 hidden md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium hover:text-blue-500 transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                        
                    {/* Mobile Menu Button */}
                    <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden", isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
                        <div className="space-y-6 flex flex-col items-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="text-sm font-medium hover:text-blue-500 transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button className="relative z-50 p-2 rounded-md focus:outline-none bg-transparent backdrop-blur-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <span className="text-2xl">✖</span> : <span className="text-2xl">☰</span>}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}