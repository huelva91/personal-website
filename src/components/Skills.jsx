import './Skills.css'

function Skills() {
    const skillCategories = [
        {
            category: "Frontend",
            skills: [
                { name: "React", level: 95 },
                { name: "JavaScript/TypeScript", level: 90 },
                { name: "HTML/CSS", level: 95 },
                { name: "Next.js", level: 85 },
                { name: "Tailwind CSS", level: 90 }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", level: 88 },
                { name: "Express", level: 85 },
                { name: "Python", level: 75 },
                { name: "REST APIs", level: 90 },
                { name: "GraphQL", level: 70 }
            ]
        },
        {
            category: "Database & Tools",
            skills: [
                { name: "MongoDB", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "Git", level: 92 },
                { name: "Docker", level: 75 },
                { name: "AWS", level: 70 }
            ]
        }
    ]

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Mis <span className="text-gradient">Habilidades</span></h2>
                    <p className="section-subtitle">Tecnologías y herramientas que domino</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category card">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-percentage">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
