
const Footer = ({ nombre, email, instagram }) => {

    return (
        <footer className="bg-dark text-white text-center py-4 mt-5">
            <h4>Esta pagina fue creada por Luciano Perondi a modo de trabajo practico para la materia Programacion IV</h4>
            <h5>Tecnicatura universitaria en Programacion - Comision 7 - Legajo:63354</h5>
            <ul>
                <p>
                    <strong className="me-2">Email:</strong>
                    <a href={'mailto:' + email}>{email}</a>
                </p>
                <p>
                    <strong className="me-2">Instagram:</strong>
                    <a
                        href={'https://www.instagram.com/' + instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @{instagram}
                    </a>
                </p>
            </ul>
            <p>© 2026 {nombre}</p>
        </footer>
    )
}

export default Footer;