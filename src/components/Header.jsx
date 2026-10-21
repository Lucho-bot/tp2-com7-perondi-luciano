import fotoPerfil from '../assets/fotoPerfil.jpeg'
import { useState } from 'react'

const Header = ({ nombre, profesion }) => {

    const [fotoAbierta, setFotoAbierta] = useState(false)

    const abrirFoto = () => {
        setFotoAbierta(true)
    }

    const cerrarFoto = () => {
        setFotoAbierta(false)
    }

    return (
        <header className="bg-dark text-white py-3 px-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

                <div className="d-flex align-items-center gap-3">
                    <img
                        onClick={abrirFoto}
                        style={{ cursor: 'pointer' }}
                        src={fotoPerfil}
                        alt={'Foto de ' + nombre}
                        width="120"
                        height="120"
                        className="rounded-circle object-fit-cover"
                    />
                    <div>
                        <p className="fs-3 fw-bold mb-0">{nombre}</p>
                        <p className="mb-0 text-white-50">{profesion}</p>
                        <p className="mb-0 text-white-50">23 años - San Miguel de Tucumán</p>
                    </div>
                </div>

                <div className="text-center text-md-end">
                    <p className="mb-0 fw-semibold">Portfolio profesional</p>
                    <p className="mb-0 text-white-50">Tecnicatura Universitaria en Programación</p>
                </div>

            </div>
            
            {fotoAbierta && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center z-3"
                    onClick={cerrarFoto}
                >
                    <img
                        src={fotoPerfil}
                        alt={'Foto de ' + nombre}
                        className="rounded img-fluid"
                        style={{ maxHeight: '80vh' }}
                    />
                </div>
            )}
        </header>
    )
}

export default Header;