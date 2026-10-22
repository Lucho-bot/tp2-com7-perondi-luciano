import { Link } from 'react-router-dom'

const Home = ({ nombre }) => {

    const secciones = [
        {
            titulo: 'Información personal',
            descripcion: 'Quién soy, por qué elegí la programación, mi formación y hacia dónde quiero crecer como desarrollador.',
        },
        {
            titulo: 'Proyectos',
            descripcion: 'Los trabajos que desarrollé durante la carrera: un compilador, APIs REST, aplicaciones web y este mismo portfolio.',
        },
        {
            titulo: 'Habilidades',
            descripcion: 'Los lenguajes, frameworks y herramientas con los que trabajo, del backend con C# al frontend con React.',
        },
        {
            titulo: 'Contactame',
            descripcion: 'Mis medios de contacto: email, GitHub e Instagram. Escribime cuando quieras.',
        },
    ]

    return (
        <section>
            <h1 className="mb-3">Hola, soy {nombre}</h1>
            <p className="fs-5">
                Estudiante de la Tecnicatura Universitaria en Programación (UTN FRT),
                en camino a convertirme en desarrollador Full Stack.
            </p>

            <h2 className="h4 mt-5 mb-3">Qué vas a encontrar acá</h2>
            <div className="row g-3">
                {secciones.map((seccion) => (
                    <div key={seccion.titulo} className="col-md-6">
                        <div className="card h-100 border-0 shadow-sm home-card">
                            <div className="card-body">
                                <h3 className="h5 card-title">{seccion.titulo}</h3>
                                <p className="card-text mb-0">{seccion.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link to="/projects" className="btn btn-oceano mt-4">Ver mis proyectos</Link>
        </section>
    )
}

export default Home