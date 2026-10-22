import SkillCard from '../components/SkillCard'
import './Skills.css'

const Skills = () => {
  const habilidades = [
    { nombre: 'JavaScript', detalle: 'Lenguaje base del frontend. Lo estoy profundizando en la cursada.', clase: 'skill-js' },
    { nombre: 'React', detalle: 'Componentes, props, estado y navegación con React Router.', clase:'skill-react' },
    { nombre: 'HTML', detalle: 'Estructura semántica de páginas web.', clase: 'skill-html' },
    { nombre: 'CSS y Bootstrap', detalle: 'Maquetado, grillas y diseño responsive.', clase:'skill-css' },
    { nombre: 'C#', detalle: 'Mi lenguaje principal en el backend.', clase:'skill-csharp' },
    { nombre: 'Blazor', detalle: 'Aplicaciones web con componentes en C#.', clase:'skill-aspnet' },
    { nombre: 'Git y GitHub', detalle: 'Control de versiones en mi flujo de trabajo diario.', clase:'skill-git' },
  ]

  return (
    <section>
      <h2 className="mb-4">Habilidades</h2>
      <div className="row g-3">
        {habilidades.map((habilidad)=>(
            <SkillCard key={habilidad.nombre} nombre={habilidad.nombre} detalle={habilidad.detalle} clase={habilidad.clase}/>
        ))}
      </div>
    </section>
  )
}

export default Skills