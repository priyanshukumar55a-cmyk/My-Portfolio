import {
  Code2,
  Database,
  Server,
  Braces,
  Globe,
  Trophy,
  Cpu,
  GitBranch,
  Terminal,
  Wrench,
  MonitorCog,
} from "lucide-react";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { cn } from "../lib/utils";

const skills = [
    {name: "HTML/CSS", description: "Creating responsive and modern web interfaces with clean UI design principles.", icon: Globe, category: "Frontend"},
    {name: "JavaScript", description: "Developing interactive web applications using modern JavaScript concepts and ES6+ features.", icon: Braces, category: "Frontend"},
    {name: "React", description: "Building scalable UI components and responsive frontend applications.", icon: Code2, category: "Frontend"},

    {name: "Node.js", description: "Developing efficient backend services and REST APIs for scalable applications.", icon: Server, category: "Backend"},
    {name: "Express.js", description: "Creating fast and structured server-side applications with middleware integration.", icon: Cpu, category: "Backend"},
    {name: "MongoDB", description: "Managing NoSQL databases and designing scalable data storage solutions.", icon: Database, category: "Backend"},

    {name: "Data Structures & Algorithms", description: "Solving complex problems efficiently using optimized algorithms and data structures.", icon: Code2, category: "Problem Solving"},
    {name: "Competitive Programming", description: "Strong problem-solving skills with experience in coding contests and algorithmic challenges.", icon: Trophy, category: "Problem Solving"},

    {name: "git", description: "Version control and collaboration tools for managing code changes and coordinating with team members.", icon: GitBranch, category: "Tools"},
    {name: "GitHub", description: "Hosting and collaborating on code repositories, managing pull requests, and utilizing GitHub features for project management.", icon: FaGithub, category: "Tools"},
    {name: "Terminal", description: "Proficient in command-line interfaces for efficient development workflows and automation.", icon: Terminal, category: "Tools"},
    {name: "VS Code", description: "Using Visual Studio Code for efficient code editing, debugging, and extension management.", icon: MonitorCog, category: "Tools"},
]


export const SkillsSection = () => {
    const categories = ["All", "Frontend", "Backend", "Problem Solving", "Tools"];
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = activeCategory === "All" ? skills : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="py-15">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">My <span className="text-primary">Skills</span></h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-4 py-2 rounded-full border  transition-colors capitalize duration-300", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary hover:cursor-pointer")}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div key={index} className="bg-primary/10 p-6 card-hover">
                            <div className="flex items-center mb-4">
                                <skill.icon className="w-6 h-6 text-primary mr-2" />
                                <h4 className="font-bold">{skill.name}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}