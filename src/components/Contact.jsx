import './components/Contact.css'

function Contact() {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Contacta <span className="text-gradient">Conmigo</span></h2>
                    <p className="section-subtitle">¿Tienes un proyecto en mente? ¡Hablemos!</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card card">
                            <div className="info-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>Email</h3>
                            <a href="mailto:sergio.huelva@example.com">sergio.huelva@example.com</a>
                        </div>

                        <div className="info-card card">
                            <div className="info-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8C8 5.79 9.79 4 12 4C14.21 4 16 5.79 16 8ZM4 18C4 15.34 9.33 14 12 14C14.67 14 20 15.34 20 18V20H4V18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>LinkedIn</h3>
                            <a href="https://linkedin.com/in/sergio-huelva" target="_blank" rel="noopener noreferrer">linkedin.com/in/sergio-huelva</a>
                        </div>

                        <div className="info-card card">
                            <div className="info-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.650001 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.650001 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3>GitHub</h3>
                            <a href="https://github.com/sergiohuelva" target="_blank" rel="noopener noreferrer">github.com/sergiohuelva</a>
                        </div>
                    </div>

                    <div className="contact-cta card">
                        <h3>¿Listo para empezar?</h3>
                        <p>Estoy disponible para proyectos freelance y oportunidades de colaboración. No dudes en contactarme.</p>
                        <a href="mailto:sergio.huelva@example.com" className="btn btn-primary">
                            Enviar Mensaje
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.5 2.5L8.75 11.25M17.5 2.5L11.875 17.5L8.75 11.25M17.5 2.5L2.5 8.125L8.75 11.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
