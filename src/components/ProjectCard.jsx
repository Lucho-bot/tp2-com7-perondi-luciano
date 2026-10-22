
const ProjectCard = ({ titulo, descripcion, tecnologias, repo }) => {

    return (
        <div className="col-md-6">
            <article className="card h-100 shadow-sm proyecto-card">
                <div className="card-body">
                    <h3 className="card-title h5">{titulo}</h3>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">
                        <small className="text-muted">Tecnologías: {tecnologias}</small>
                    </p>
                    {repo && (
                        <a
                            href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-oceano btn-sm mt-2"
                        >
                            Ver repositorio
                        </a>
                    )}
                </div>
            </article>
        </div>
    )
}

export default ProjectCard;