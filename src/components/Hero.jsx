import './Hero.css'

function Hero() {
    return (
        <section id="home" className="hero section">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="container">
                <div className="hero-content animate-fade-in-up">
                    <p className="hero-greeting">Hola, soy</p>
                    <h1 className="hero-title">
                        Sergio Huelva <span className="text-gradient">Luque</span>
                    </h1>
                    <h2 className="hero-subtitle">Desarrollador Web Full Stack</h2>
                    <p className="hero-description">
                        Creando experiencias web modernas, rápidas y escalables con las últimas tecnologías.
                        Especializado en React, Node.js y arquitecturas cloud.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            Ver Proyectos
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.16669 10H15.8334M15.8334 10L10 4.16669M15.8334 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-secondary">Contactar</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
