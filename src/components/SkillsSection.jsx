
const skills = [
    {name: "HTML/CSS", level:80, category: "Frontend"},
    {name: "JavaScript", level:75, category: "Frontend"},
    {name: "React", level:70, category: "Frontend"},

    {name: "Node.js", level:65, category: "Backend"},
    {name: "Express.js", level:60, category: "Backend"},
    {name: "MongoDB", level:70, category: "Database"},

    {name: "Data Structures & Algorithms", level:85, category: "Programming"},
    {name: "Competitive Programming", level:80, category: "Programming"},
]

export const SkillsSection = () => {
    return (
        <section id="skills" className="py-12">
            <div className="container">
                <h2 className="text-3xl font-bold text-center mb-8">My <span className="text-primary">Skills</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="bg-primary/10 p-6 card-hover">
                            <h4 className="font-bold">{skill.name}</h4>
                            <div className="w-full bg-muted h-2 rounded-full mt-2 bg-black">
                                <div 
                                    className="bg-primary h-2 rounded-full" 
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <p className="text-sm text-muted-foreground">Level: {skill.level}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}