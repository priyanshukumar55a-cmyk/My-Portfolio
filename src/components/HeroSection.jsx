import { ArrowBigDown } from "lucide-react"
import { TypewriterText } from "./TypewriterText"

export const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center px-4">
      
      <div className="container max-w-3xl mx-auto text-center z-10">
        <div className="space-y-6">

          <h1 className="text-5xl font-bold">
            <span className="opacity-0 animate-fade-in">
              Hi, I'm{" "}
            </span>
            <TypewriterText />
          </h1>

          <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            I’m a passionate developer who enjoys building efficient and user-friendly web applications.
            With the knowledge of the MERN stack and a strong foundation in Data Structures and Algorithms,
            I focus on writing clean and scalable code.
          </p>

          <div className="opacity-0 animate-fade-in-delay-3">
            <a
              href="#projects"
              className="cosmic-button bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium transition-transform duration-300 hover:scale-105"
            >
              View My Work
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
        <span className="text-gray-400 animate-bounce text-lg">⬇️</span>
      </div>

    </section>
  )
}