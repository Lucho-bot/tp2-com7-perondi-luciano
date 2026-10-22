import SkillCard from '../components/SkillCard'

const Skills = () => {
  const habilidades = [
    { nombre: 'JavaScript', detalle: 'Lenguaje base del frontend. Lo estoy profundizando en la cursada.' },
    { nombre: 'React', detalle: 'Componentes, props, estado y navegación con React Router.' },
    { nombre: 'HTML', detalle: 'Estructura semántica de páginas web.' },
    { nombre: 'CSS y Bootstrap', detalle: 'Maquetado, grillas y diseño responsive.' },
    { nombre: 'C#', detalle: 'Mi lenguaje principal en el backend.' },
    { nombre: 'Blazor', detalle: 'Aplicaciones web con componentes en C#.' },
    { nombre: 'Git y GitHub', detalle: 'Control de versiones en mi flujo de trabajo diario.' },
  ]

  return (
    <section>
      <h2 className="mb-4">Habilidades</h2>
      <div className="row g-3">
        {habilidades.map((habilidad)=>(
            <SkillCard key={habilidad.nombre} nombre={habilidad.nombre} detalle={habilidad.detalle}/>
        ))}
      </div>
    </section>
  )
}

export default Skills