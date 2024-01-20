import {format, isToday} from "date-fns";
import {es} from "date-fns/locale";

export function InfoJuegoModal({
  hora_formateada,
  goles_local,
  goles_visitante,
  arbitro,
  fecha_utc,
}) {
  const fechaFormateada = () => {
    const fechaPartidoDate = new Date(fecha_utc);
    if (isToday(fechaPartidoDate)) {
      return "Hoy";
    } else {
      return format(fechaPartidoDate, "dd MMMM", {locale: es});
    }
  };
  return (
    <div className="match-details">
      <div className="match-date">
        {fechaFormateada() + " "}
        <strong>{hora_formateada}</strong>
      </div>
      <div className="match-score">
        <span
          className={`match-score-number ${
            goles_local > goles_visitante && "match-score-number--leading"
          }`}
        >
          {goles_local}
        </span>
        <span className="match-score-divider">:</span>
        <span
          className={`match-score-number ${
            goles_local < goles_visitante && "match-score-number--leading"
          }`}
        >
          {goles_visitante}
        </span>
      </div>
      <div className="match-referee">
        Arbitro: <strong>{arbitro}</strong>
      </div>
      <div className="match-bet-options bet">
        <button className="match-bet-option">0.00</button>
        <button className="match-bet-option">0.00</button>
        <button className="match-bet-option">0.00</button>
      </div>
    </div>
  );
}
