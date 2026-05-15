import { Star } from "lucide-react"
import certificate from "../assets/Rumble-certificate2.png"

export const AchievementsSection = () => {
    return (
        <section id="achievements" className="py-20">
            <div className="mx-auto px-6">
                
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
                    My <span className="text-primary">Achievements</span>
                </h2>

                <div className="flex justify-center">
                    
                    <div
                        className="
                        max-w-5xl
                        bg-white/5
                        border border-white/10
                        rounded-3xl
                        overflow-hidden
                        shadow-2xl
                        backdrop-blur-sm
                        hover:scale-[1.02]
                        transition-all duration-300
                        "
                    >

                        <div className="grid md:grid-cols-2 gap-8 items-center p-6">

                            {/* Certificate Image */}
                            <div className="flex justify-center">
                                <img
                                    src={certificate}
                                    alt="CP Rumble Certificate"
                                    className="
                                    bg-cyan-800
                                    w-full
                                    max-w-md
                                    border-4 border-primary/30
                                    "
                                />
                            </div>

                            {/* Achievement Content */}
                            <div className="space-y-5">

                                <div>
                                    <p className="text-primary font-semibold tracking-wide uppercase text-sm">
                                        Competitive Programming
                                    </p>

                                    <h3 className="text-2xl md:text-3xl font-bold mt-2">
                                        🥇 1st Position — CP Rumble 2026
                                    </h3>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    Led team <span className="font-semibold text-muted-foreground">“404 Brain Not Found”{" "}</span> 
                                    as Team Captain in a competitive programming contest organized by 
                                    IIIT Ranchi, handling contest strategy, problem allocation, and 
                                    collaborative debugging under pressure.
                                </p>

                                {/* Highlights */}
                                <div className="space-y-3 pt-2">

                                    <div className="flex items-center gap-3">
                                        <span className="text-primary">✔</span>
                                        <p>Team Captain & Strategy Lead</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-primary">✔</span>
                                        <p>Real-time Problem Solving & Debugging</p>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="text-primary">✔</span>
                                        <p>Cross-year Team Collaboration</p>
                                    </div>

                                </div>

                                {/* Optional Button */}
                                <a
                                    href={certificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cosmic-button py-3"
                                >
                                    View Certificate
                                </a>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="py-10">
                    <div className="">
                        <h2 className="text-2xl font-semibold my-10 text-cyan-400">
                            By The Numbers...
                        </h2>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg md:hover:scale-105 transition-all duration-300 overflow-hidden relative">
                                <h3 className="text-3xl font-bold text-purple-500">1880+</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Leetcode Rating
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg md:hover:scale-105 transition-all duration-300 overflow-hidden relative">
                                <h3 className="text-3xl font-bold text-blue-500 flex items-center justify-center gap-2">
                                    1749
                                    <Star size={20} />
                                </h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    CodeChef 3★
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg md:hover:scale-105 transition-all duration-300 overflow-hidden relative">
                                <h3 className="text-3xl font-bold text-pink-400">1400+</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Codeforces Specialist
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg md:hover:scale-105 transition-all duration-300 overflow-hidden relative">
                                <h3 className="text-3xl font-bold text-green-400">1600+</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    Total Questions Solved
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg md:hover:scale-105 transition-all duration-300 overflow-hidden relative">
                                <h3 className="text-3xl font-bold text-red-400">800+</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    DSA Problems Solved
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg md:hover:scale-105 transition-all duration-300 overflow-hidden relative">
                                <h3 className="text-3xl font-bold text-yellow-400">9.07</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    CGPA
                                </p>
                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center shadow-lg md:hover:scale-105 transition-all duration-300 col-span-2 overflow-hidden relative">
                                <h3 className="text-3xl font-bold text-violet-500">🥇 CP Rumble</h3>
                                <p className="text-sm text-muted-foreground mt-2">
                                    1st Place • Team Captain
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}