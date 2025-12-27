import './About.css'

function About() {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Sobre <span className="text-gradient">Mí</span></h2>
                    <p className="section-subtitle">Desarrollador apasionado por crear soluciones innovadoras</p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Soy un desarrollador web full stack con experiencia en la creación de aplicaciones
                            web modernas y escalables. Me apasiona aprender nuevas tecnologías y aplicarlas
                            para resolver problemas complejos.
                        </p>
                        <p>
                            Mi enfoque se centra en escribir código limpio, mantenible y eficiente, siempre
                            buscando las mejores prácticas y patrones de diseño. Me encanta trabajar en equipo
                            y compartir conocimientos con otros desarrolladores.
                        </p>
                        <p>
                            Cuando no estoy programando, me gusta mantenerme actualizado con las últimas
                            tendencias en desarrollo web, contribuir a proyectos open source y explorar
                            nuevas herramientas y frameworks.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card card">
                            <div className="stat-number text-gradient">3+</div>
                            <div className="stat-label">Años de Experiencia</div>
                        </div>
                        <div className="stat-card card">
                            <div className="stat-number text-gradient">20+</div>
                            <div className="stat-label">Proyectos Completados</div>
                        </div>
                        <div className="stat-card card">
                            <div className="stat-number text-gradient">15+</div>
                            <div className="stat-label">Tecnologías Dominadas</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
