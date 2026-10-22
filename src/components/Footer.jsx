
const Footer = ({ nombre, email, instagram }) => {

    return (
        <footer className="bg-dark text-white text-center py-4 mt-5">
            <h4>Si me queres contactar:</h4>
            <p>
                Mail: 
                <a href={'mailto:' + email}>{email}</a>
            </p>
            <p>
                Instagram: 
                <a
                    href={'https://www.instagram.com/' + instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    @{instagram}
                </a>
            </p>
            <p>© 2026 {nombre}</p>
        </footer>
    )
}

export default Footer;