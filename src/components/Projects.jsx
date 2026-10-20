import ProjectCard from "./ProjectCard"

const Projects = () => {
    const proyectos = [
        {
            id: 1,
            titulo: "Compilador de expresiones aritméticas",
            descripcion: "App de consola en C# que parsea expresiones como (x - 1) * 2, construye un árbol de sintaxis abstracta (AST) con un parser de descenso recursivo y lo evalúa para distintos valores, respetando precedencia y paréntesis.",
            tecnologias: "C#, .NET, POO (herencia y polimorfismo)"
        },
        {
            id: 2,
            titulo: "CatálogoREST — API + cliente de terminal",
            descripcion: "Sistema de catálogo de productos con dos apps que corren en paralelo: una API REST (ASP.NET Core Minimal API + EF Core + SQLite) y un cliente de terminal que la consume por HTTP. Registra movimientos de stock actualizando el inventario en la misma operación.",
            tecnologias: "C#, ASP.NET Core, EF Core, SQLite, REST, Terminal.Gui"
        },
        {
            id: 3,
            titulo: "AgendaWeb — agenda de contactos",
            descripcion: "Aplicación web para gestionar contactos con alta, baja, modificación y búsqueda en vivo, en un diseño maestro/detalle. Hecha con Blazor (modo Server) hablando directo a la base con EF Core.",
            tecnologias: "C#, Blazor, EF Core, SQLite, Bootstrap"
        },
        {
            id: 4,
            titulo: "Chat de terminal con IA",
            descripcion: "Cliente de terminal que conversa con un modelo de IA real a través de su API, con respuestas en streaming y function calling. La clave se maneja de forma segura desde un archivo .env.",
            tecnologias: "C#, API de IA, streaming, function calling"

        }
    ]

    return (
        <section className="py-4">
            <h2 className="mb-3">Proyectos</h2>
            <div className="row g-4">
                {proyectos.map((proyecto) => (
                    <ProjectCard 
                        key= {proyecto.id}
                        titulo= {proyecto.titulo}
                        descripcion= {proyecto.descripcion}
                        tecnologias= {proyecto.tecnologias}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects;