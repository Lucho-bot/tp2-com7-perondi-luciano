

const Contact = ({ email, github, instagram }) => {


  return (
    <section>
      <h2 className="mb-3">Contactame</h2>
      <p className="mb-4">
        ¿Tenés un proyecto en mente, una consulta o ganas de charlar de
        programación (o de cine)? Escribime por cualquiera de estos medios.
      </p>

      <ul className="list-group">
        <li className="list-group-item">
          <strong className="me-2">Email:</strong>
          <a href={'mailto:' + email}>{email}</a>
        </li>
        <li className="list-group-item">
          <strong className="me-2">GitHub:</strong>
          <a href={'https://github.com/' + github} target="_blank" rel="noopener noreferrer">
            github.com/{github}
          </a>
        </li>
        <li className="list-group-item">
          <strong className="me-2">Instagram:</strong>
          <a href={'https://www.instagram.com/' + instagram} target="_blank" rel="noopener noreferrer">
            @{instagram}
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact