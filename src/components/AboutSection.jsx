import { Brain, Briefcase, Code2, CodeXml, Sparkles, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 relative z-10">  
        <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">About 
              <span className="text-blue-500"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-4">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Passionate Software Engineer</h3>
                    <p className="text-muted-foreground leading-7">
                      I'm a passionate Full Stack Developer and competitive programmer who enjoys building modern, responsive, and scalable web applications. 
                      I specialize in the MERN stack — MongoDB, Express.js, React, and Node.js — and love turning ideas into clean and efficient digital experiences.
                      <br /><br />

                      Along with web development, I have a strong grasp of Data Structures and Algorithms, which helps me write optimized and maintainable code. 
                      I enjoy solving challenging problems, learning new technologies, and continuously improving my development skills.
                      <br /><br />

                      My goal is to create impactful software solutions while growing as a developer through real-world projects and continuous learning.
                    </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                      <a href="#contact" className="cosmic-button">
                        Get in Touch
                      </a>
                      <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                        Download Resume
                      </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="bg-primary/10 p-6 card-hover">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <CodeXml className="w-6 h-6 text-primary" />
                        </div>

                        <div className="text-left">
                          <h4 className="font-bold">Full Stack Development</h4>
                          <p className="text-sm text-muted-foreground">
                            Building modern web applications using the MERN stack.
                          </p>
                        </div>
                      </div>

                    </div>
                    <div className="bg-primary/10 p-6 card-hover">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Code2 className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold">Competitive Programming</h4>
                          <p className="text-sm text-muted-foreground">
                            Solving complex algorithmic problems and optimizing solutions.
                          </p>
                        </div>
                      </div>

                    </div>
                    <div className="bg-primary/10 p-6 card-hover">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Brain className="w-6 h-6 text-primary" />
                        </div>

                        <div className="text-left">
                          <h4 className="font-bold">Data Structures & Algorithms</h4>
                          <p className="text-sm text-muted-foreground">
                            Strong understanding of problem-solving techniques and scalable logic building.
                          </p>
                        </div>
                      </div>

                    </div>
                    <div className="bg-primary/10 p-6 card-hover">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Sparkles className="w-6 h-6 text-primary" />
                        </div>

                        <div className="text-left">
                          <h4 className="font-bold">Clean & Scalable Code</h4>
                          <p className="text-sm text-muted-foreground">
                            Writing maintainable, optimized, and production-ready code for real-world applications.
                          </p>
                        </div>
                      </div>

                    </div>
                
                </div>

            </div>
        </div>
    </section>
  )
}
        
