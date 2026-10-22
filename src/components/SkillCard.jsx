const SkillCard = ({ nombre, detalle }) => {
  return (
    <div className="col-sm-6 col-lg-4">
      <div className="card h-100">
        <div className="card-body">
          <h3 className="h5 card-title">{nombre}</h3>
          <p className="card-text mb-0">{detalle}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard