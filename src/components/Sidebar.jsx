import { NavLink } from "react-router-dom";

const Sidebar = () => {

    return (
        <nav className="nav nav-pills flex-column">
            <NavLink to="/" end className="nav-link">Inicio</NavLink>
            <NavLink to="/about" className="nav-link">Informacion personal</NavLink>
            <NavLink to="/projects" className="nav-link">Proyectos</NavLink>
            <NavLink to="/skills" className="nav-link">Habilidades</NavLink>
            <NavLink to="/contact" className="nav-link">Contactame</NavLink>
        </nav>
    )
}

export default Sidebar;