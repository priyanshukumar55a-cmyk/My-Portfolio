import { TypewriterText } from "./TypewriterText"
import myPhoto from "../assets/my_image.png"

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-4 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto z-10">

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-26">

          {/* LEFT SIDE */}
          <div className="flex-1 text-center md:text-left space-y-6">

            {/* Heading */}
            <h1 className="font-bold leading-tight">
              
              <span className="text-4xl sm:text-5xl md:text-6xl text-muted-foreground opacity-0 animate-fade-in">
                Hi, I'm{" "}
              </span>

              <span className="text-5xl sm:text-5xl md:text-6xl text-blue-500">
                <TypewriterText />
              </span>

            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-2 leading-relaxed">
              MERN Stack Developer & Competitive Programmer focused on
              building scalable web apps and solving algorithmic problems.
            </p>

            {/* Button */}
            <div className="opacity-0 animate-fade-in-delay-3">
              <a
                href="#projects"
                className="
                  cosmic-button
                  inline-block
                  bg-blue-500
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  text-lg
                  font-medium
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]
                "
              >
                View My Work
              </a>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center flex-1">

            <div className="relative animate-float">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

              {/* Profile Image */}
              <img
                src={myPhoto}
                alt="profile_img"
                className="
                  relative
                  w-52 h-52
                  sm:w-64 sm:h-64
                  md:w-80 md:h-80
                  rounded-full
                  object-cover
                  border-4 border-blue-500/30
                  shadow-2xl
                "
              />

            </div>

          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center animate-float">
        
        <span className="text-sm text-gray-400 mb-2">
          Scroll Down
        </span>

        <span className="text-gray-400 animate-bounce text-lg">
          ⬇️
        </span>

      </div>
    </section>
  )
}