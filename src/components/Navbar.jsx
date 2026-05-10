import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { ThemeToggle } from "./ThemeToggle";

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
    const [activeSection, setActiveSection] = useState("Home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <nav className={cn("fixed top-0 w-full z-40 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent")}>
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between px-2 ">

                    <div className="text-2xl font-bold text-glow">My <span className="text-blue-500">Portfolio</span></div>
                    <div className="flex items-center gap-6">
                        <div className="space-x-6 hidden md:flex ">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                onMouseEnter={() => {
                                    document.getElementById(item.href.substring(1))?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                    setActiveSection(item.name);
                                }}
                                href={item.href}
                                className={cn("text-sm font-medium transition-colors duration-300", activeSection === item.name ? "text-blue-500" : "hover:text-blue-500")}
                                onClick={() => setActiveSection(item.name)}
                            >
                                {item.name}
                            </a>
                        ))}
                        </div>
                            <ThemeToggle />
                    </div>

                    <div className="md:hidden">
                        <button className="relative z-50 p-2 rounded-md focus:outline-none bg-transparent backdrop-blur-sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <span className="text-2xl">✖</span> : <span className="text-2xl">☰</span>}
                        </button>
                    </div>
                </div>
            </div>

            <div className={cn("fixed inset-0 h-screen overflow-hidden bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden", isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}>
                <div className="space-y-6 flex flex-col items-center">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={cn("text-sm font-medium transition-colors duration-300", activeSection === item.name ? "text-blue-500" : "hover:text-blue-500")}
                            onClick={() => {
                                setActiveSection(item.name);
                                setIsMenuOpen(false);
                            }}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}