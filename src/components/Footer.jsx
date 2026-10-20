
const Footer = ({nombre,email}) => {

    return (
        <footer className="bg-dark text-white text-center py-4 mt-5">           
            <h4>Si me queres contactar:</h4>
            <p>
             <a href={'mailto:' + email}>{email}</a>
            </p>
            <p>© 2026 {nombre}</p>
        </footer>
    )
}

export default Footer;