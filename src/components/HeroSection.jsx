import { ArrowBigDown } from "lucide-react"

export const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center h-screen text-center px-4">
      
      <div className="container max-w-3xl mx-auto text-center z-10">
        <div className="space-y-6">

          <h1 className="text-5xl font-bold">
            <span className="opacity-0 animate-fade-in">
              Hi, I'm
            </span>
            <span className="text-blue-500 opacity-0 animate-fade-in-delay-1">
              {" "}Priyanshu Kumar
            </span>
          </h1>

          <p className="md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            I’m a passionate developer who enjoys building efficient and user-friendly web applications.
            With the knowledge of the MERN stack and a strong foundation in Data Structures and Algorithms,
            I focus on writing clean and scalable code.
          </p>

          <div className="opacity-0 animate-fade-in-delay-3">
            <a
              href="#projects"
              className="cosmic-button inline-block mt-4 px-6 py-3 text-sm font-medium text-white rounded-md transition-colors duration-300 bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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