import { NavLink } from "react-router-dom";
import '../styles/Sidebar.css'

const Sidebar = () => {

    return (
        <nav className="d-flex flex-column gap-2">
            <NavLink to="/" end className="sidebar-link">Inicio</NavLink>
            <NavLink to="/about" className="sidebar-link">Información personal</NavLink>
            <NavLink to="/projects" className="sidebar-link">Proyectos</NavLink>
            <NavLink to="/skills" className="sidebar-link">Habilidades</NavLink>
            <NavLink to="/contact" className="sidebar-link">Contactame</NavLink>
        </nav>
    )
}

export default Sidebar;