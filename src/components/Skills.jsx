
const Skills = () => {
  const habilidades = ['HTML', 'CSS', 'JavaScript', 'React', 'C#', 'Blazor', 'Git']

  return (
        <section className="py-4 border-bottom">
            <h2 className="mb-3">Habilidades</h2>
            <ul className="list-unstyled d-flex flex-wrap gap-2">
            {habilidades.map((habilidad) => (<li key={habilidad} className="badge bg-primary fs-6">{habilidad}</li>))}
            </ul>
        </section>
    )
}

export default Skills