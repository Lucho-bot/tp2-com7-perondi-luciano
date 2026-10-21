import { Link } from 'react-router-dom'

const Home = ({nombre}) => {

    return (
        <section>
            <h1 className="mb-3">Hola, soy {nombre}</h1>
            <p className="fs-5">
                Estudiante de la Tecnicatura Universitaria en Programación (UTN FRT),
                en camino a convertirme en desarrollador Full Stack.
            </p>

            <h2 className="h4 mt-4">Perfil profesional</h2>
            <p>
                Desarrollo backend con C# y .NET: APIs REST, aplicaciones web con Blazor
                y persistencia con Entity Framework Core. Hoy estoy sumando React al
                frontend. Prefiero código simple que pueda explicar de punta a punta.
            </p>

            <h2 className="h4 mt-4">Qué vas a encontrar acá</h2>
            <ul>
                <li><strong>Sobre mí:</strong> quién soy, mi formación y mis objetivos.</li>
                <li><strong>Habilidades:</strong> las tecnologías y herramientas que uso.</li>
                <li><strong>Proyectos:</strong> trabajos que desarrollé, con enlace a sus repositorios.</li>
                <li><strong>Contacto:</strong> cómo comunicarte conmigo.</li>
            </ul>

            <Link to="/projects" className="btn btn-primary mt-3">Ver mis proyectos</Link>
        </section>
    )
}

export default Home