
const Header = ({nombre,profesion}) => {

    return (
        <header className="bg-dark text-white text-center py-5 mb-4 rounded-bottom">
            <h1 className="display-4 fw-bold">{nombre}</h1>
            <h3 className="fw-light">{profesion}</h3>
            <h3 className="fw-light">23 años - San Miguel de Tucumán.</h3>
        </header>
    )
}

export default Header;