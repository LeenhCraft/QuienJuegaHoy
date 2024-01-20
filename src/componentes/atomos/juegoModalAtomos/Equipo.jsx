export function Equipo({id, img, nombre}) {
  return (
    <div className="column">
      <div className="team team--home">
        <div className="team-logo">
          <img src={img} alt={nombre} />
        </div>
        <h2 className="team-name">{nombre}</h2>
      </div>
    </div>
  );
}
