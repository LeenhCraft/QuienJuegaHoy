export function Competicion({img,nombre}) {
  return (
    <div className="match-tournament">
      <img src={img} alt={nombre} />
      <span className="match-tournament-name">{nombre}</span>
    </div>
  );
}