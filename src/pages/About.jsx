import { useState } from "react";

const About = () => {
    const [verMas, setVerMas] = useState(false)

    return (
        <section className="py-4 border-bottom">
            <h2>Un poco sobre mí</h2>
            <p>Soy Luciano, estudiante de la Tecnicatura Universitaria en Programación
            en la UTN (Facultad Regional Tucumán). Estudio programacion principalmente porque siempre quise saber
            que era lo que habia detras de una pantalla y que era lo que me permitia interactuar con ella. Vivimos en un
            mundo que no para de evolucionar y siempre trate de mantenerme al dia con las ultimas tecnologias y como pueden
            mejorar mi vida.
            Trabajo principalmente con C# y el ecosistema .NET: desarrollé APIs REST con ASP.NET Core, aplicaciones web
            con Blazor y persistencia de datos con Entity Framework Core y SQLite.
            Actualmente estoy sumando React al frontend. Uso Git y GitHub en mi flujo
            de trabajo diario. Sobre todo, me importa entender a fondo lo que
            construyo: prefiero código simple y que pueda explicar de punta a punta,
            antes que soluciones que no domino. Aun no tengo claro en que area me quiero desarrollar puntualmente
            dentro del ambito de la programacion pero mantengo el foco en ampliar mis habilidades y volverme un 
            programador Full Stack lo antes posible.</p>

            {verMas && (
                <div>
                    <p><strong>Inglés:</strong> Nivel C1, lectura técnica fluida y 
                    capacidad de mantener conversaciones prolongadas con aquellos que lo hablan de manera nativa y fluida.</p>
                    <p><strong>Estudios secundarios:</strong> Colegio Nueva Concepcion, San Miguel de Tucumán.</p>
                    <p><strong>Extra:</strong> Entre mis otras pasiones se encuentra una que tambien conlleva estar horas frente a una pantalla: el cine.
                    Si algun dia no sabes que ver o tenes ganas de desarrollar un proyecto que tenga que ver con peliculas, contactame! Tengo mucho para aportar
                    y es un tema que me interesa bastante.</p>
                </div>
            )}

            <button className="btn btn-outline-primary mt-2" onClick={() => setVerMas(!verMas)}>
                {verMas ? 'Ver menos' : 'Ver más'}
            </button>
        </section>
    )
}

export default About;