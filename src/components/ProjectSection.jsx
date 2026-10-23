import { cn } from "../lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "StayEase",
    description:
      "A full-stack vacation rental platform, enabling users to discover properties, make bookings, write reviews, and manage their listings.",
    image: "/projects/stayease.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Razorpay",
    ],
    demoUrl: "https://stay-ease-app-flax.vercel.app/",
    githubUrl: "https://github.com/priyanshukumar55a-cmyk/StayEase",
  },
  {
    id: 2,
    title: "PulseChat",
    description:
      "A full-stack real-time messaging application featuring group chats, online presence, typing indicators, read receipts, and seamless real-time communication.",
    image: "/projects/pulsechat.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Socket.IO",
      "cloudinary",
    ],
    demoUrl: "https://pulse-chat-pe43.vercel.app/",
    githubUrl: "https://github.com/priyanshukumar55a-cmyk/PulseChat",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "A Spotify-inspired music player featuring playlist-based song organization, interactive playback controls, and a sleek, responsive interface for an engaging music-listening experience.",
    image: "/projects/spotify-clone.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://music-player-inspired-by-spotify.vercel.app/",
    githubUrl:
      "https://github.com/priyanshukumar55a-cmyk/Music-player-Inspired-by-Spotify-",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-15">
      <div className="text-3xl font-bold text-center mb-8">
        Featured <span className="text-primary">Projects</span>
      </div>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Here are some of the projects I've built, showcasing my skills in
        full-stack development and problem-solving.
      </p>
      <div className="mb-8 text-center text-muted-foreground">
        <button className="cosmic-button inline-flex items-center">
          <a
            href="https://github.com/priyanshukumar55a-cmyk"
            className="flex items-center"
          >
            Check My Github <ArrowRight className="ml-2" />
          </a>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className={cn(
              "group rounded-xl overflow-hidden",
              "border border-border bg-card",
              "transition-all duration-300",
              "shadow-[0_4px_20px_rgba(0,0,0,0.15)]",
              "hover:-translate-y-2",
              "hover:shadow-[0_12px_35px_rgba(139,92,246,0.22)]",
              "hover:border-purple-400/20",
            )}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                className="w-full h-56 object-contain transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-5 pt-2">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-md border border-purple-400/20 bg-purple-500/10 text-pink-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 justify-center pt-3 border-t border-border/60">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-colors duration-200 hover:text-primary hover:underline"
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-colors duration-200 hover:text-primary hover:underline"
                >
                  <FaGithub className="h-4 w-4" />
                  Source code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
