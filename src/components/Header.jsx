import './components/Header.css'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a href="#home" className="logo">
                        <span className="text-gradient">SH</span>
                    </a>

                    <ul className="nav-links">
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Sobre Mí</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#skills">Habilidades</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
