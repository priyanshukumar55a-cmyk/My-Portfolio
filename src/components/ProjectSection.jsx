import { cn } from "../lib/utils"
import { ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: ""
    }
]

export const ProjectSection = () => {
    return <section id="projects">
        <div className="text-3xl font-bold text-center mb-8">
            Featured <span className="text-primary">Projects</span>
        </div>
        <div className="mb-8 text-center text-muted-foreground">
            <button className="cosmic-button inline-flex items-center">
                <a href="https://github.com/priyanshukumar55a-cmyk" className="flex items-center">
                    Check My Github <ArrowRight className="ml-2" />
                </a>
            </button>
        </div>
    </section>
}