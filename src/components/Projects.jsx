import './components/Projects.css'

function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pago y panel de administración.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            gradient: "var(--color-gradient-1)"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones.",
            tech: ["React", "Firebase", "Tailwind CSS"],
            gradient: "var(--color-gradient-2)"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Dashboard meteorológico interactivo con visualización de datos en tiempo real y pronósticos extendidos.",
            tech: ["React", "OpenWeather API", "Chart.js"],
            gradient: "var(--color-gradient-3)"
        },
        {
            id: 4,
            title: "Social Media Analytics",
            description: "Herramienta de análisis de redes sociales con métricas detalladas y reportes automatizados.",
            tech: ["React", "Express", "PostgreSQL", "D3.js"],
            gradient: "var(--color-gradient-1)"
        },
        {
            id: 5,
            title: "Portfolio CMS",
            description: "Sistema de gestión de contenidos especializado para portfolios creativos con editor visual.",
            tech: ["Next.js", "Sanity.io", "Vercel"],
            gradient: "var(--color-gradient-2)"
        },
        {
            id: 6,
            title: "Fitness Tracker",
            description: "Aplicación de seguimiento de fitness con planes de entrenamiento personalizados y estadísticas.",
            tech: ["React Native", "Node.js", "MySQL"],
            gradient: "var(--color-gradient-3)"
        }
    ]

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Mis <span className="text-gradient">Proyectos</span></h2>
                    <p className="section-subtitle">Algunos de los proyectos en los que he trabajado</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card card">
                            <div className="project-icon" style={{ background: project.gradient }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
