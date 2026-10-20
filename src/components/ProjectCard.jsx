
const ProjectCard = ({ titulo, descripcion, tecnologias }) => {

    return (
        <div className="col-md-6">
            <article className="card h-100 shadow-sm proyecto-card">
                <div className="card-body">
                    <h3 className="card-title h5">{titulo}</h3>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">
                        <small className="text-muted">Tecnologías: {tecnologias}</small>
                    </p>
                </div>
            </article>
        </div>
    )
}

export default ProjectCard;