import styled from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import {FaRegStar} from "react-icons/fa";
import {BiBellPlus} from "react-icons/bi";
import {format, isToday} from "date-fns";
import {es} from "date-fns/locale";

export function JuegoModal({isOpen, setIsOpen, data}) {
  const fechaFormateada = () => {
    const fechaPartidoDate = new Date(data.fecha_utc);
    if (isToday(fechaPartidoDate)) {
      return "Hoy";
    } else {
      return format(fechaPartidoDate, "dd MMMM", {locale: es});
    }
  };
//   console.log(data);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur fixed z-10 inset-0 flex justify-center items-center"
        >
          <motion.div
            initial={{scale: 0, rotate: "20deg"}}
            animate={{scale: 1, rotate: "0deg"}}
            exit={{scale: 0, rotate: "0deg"}}
            onClick={(e) => e.stopPropagation()}
          >
            <Container>
              <div className="match">
                <div className="match-header">
                  <div className="match-status bg-gray-100 text-gray-500">
                    {data.estado}
                  </div>
                  <div className="match-tournament">
                    <img src={data.emblem_competicion} alt={data.competicion} />
                    <span className="match-tournament-name">
                      {data.competicion}
                    </span>
                  </div>
                  <div className="match-actions">
                    <button className="btn-icon">
                      <FaRegStar />
                    </button>
                    <button className="btn-icon">
                      <BiBellPlus />
                    </button>
                  </div>
                </div>
                <div className="match-content">
                  <div className="column">
                    <div className="team team--home b">
                      <div className="team-logo">
                        <img src={data.emblem_local} alt={data.local} />
                      </div>
                      <h2 className="team-name">{data.local}</h2>
                    </div>
                  </div>
                  <div className="match-details">
                    <div className="match-date">
                      {fechaFormateada() + " "}
                      <strong>{data.hora_formateada}</strong>
                    </div>
                    <div className="match-score">
                      <span className="match-score-number match-score-number--leading">
                        {data.goles_local}
                      </span>
                      <span className="match-score-divider">:</span>
                      <span className="match-score-number">
                        {data.goles_visitante}
                      </span>
                    </div>
                    <div></div>
                    <div className="match-referee">
                      Arbitro: <strong>{data.arbitro}</strong>
                    </div>
                    <div className="match-bet-options bet">
                      <button className="match-bet-option">0.00</button>
                      <button className="match-bet-option">0.00</button>
                      <button className="match-bet-option">0.00</button>
                    </div>
                  </div>
                  <div className="column">
                    <div className="team team--away b">
                      <div className="team-logo">
                        <img src={data.emblem_visitante} alt={data.visitante} />
                      </div>
                      <h2 className="team-name">{data.visitante}</h2>
                    </div>
                  </div>
                </div>
                <div className="match-footer">
                  <p></p>
                  <button
                    className="match-bet-place"
                    onClick={() => setIsOpen(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </Container>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
// dar estilos a la tarjeta
const Container = styled.div`
  .match {
    margin: auto;
    width: calc(100vw - 20px);
    min-width: calc(100vw - 20px);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 2px 0 rgba(48, 48, 48, 0.1),
      0 4px 4px 0 rgba(48, 48, 48, 0.1);
  }

  .match-header {
    display: flex;
    padding: 0.5rem;
    border-bottom: 2px solid rgba(48, 48, 48, 0.1);
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .match-status {
    background-color: #fdeaec;
    color: #d72641;
    padding: 0.5rem;
    border-radius: 6px;
    font-weight: 600;
    font-size: 12px;
    display: flex;
    align-items: center;
    line-height: 1;
    position: absolute;
    left: 0;
    margin-left: 0.5rem;
    &:before {
      content: "";
      display: block;
      width: 6px;
      height: 6px;
      background-color: currentcolor;
      border-radius: 50%;
      margin-right: 8px;
    }
  }

  .match-tournament {
    display: flex;
    align-items: center;
    font-weight: 600;
    img {
      width: 20px;
      margin-right: 12px;
    }
  }

  .match-actions {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    right: 0;
    margin-right: 1rem;
  }

  .btn-icon {
    border: none;
    background-color: rgba(0, 0, 0, 0);
    color: #dbdade;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .match-content {
    display: flex;
    position: relative;
  }

  .column {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3);
  }

  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .team-logo {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 4px 4px 0 rgba(48, 48, 48, 0.15), 0 0 0 10px #f3f5f9;
    transition: background-color 200ms ease-in 0s, box-shadow 200ms ease-in 0s;
    img {
      width: 45px;
    }
  }

  .team-name {
    text-align: center;
    margin-top: 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
  }

  .match-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% / 3);
  }

  .match-date,
  .match-referee {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 0.75rem;
    line-height: 1rem;
    color: #8a8f98;
    strong {
      color: #1c2a38;
    }
  }

  .match-score {
    margin-top: 12px;
    display: flex;
    align-items: center;
  }

  .match-score-number {
    font-size: 3rem;
    font-weight: 600;
    line-height: 1;
    &--leading {
      color: #623ce6;
    }
  }

  .match-score-divider {
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1;
    color: #1c2a38;
    margin-left: 10px;
    margin-right: 10px;
  }

  .match-time-lapsed {
    color: #df9443;
    font-size: 14px;
    font-weight: 600;
    margin-top: 8px;
  }

  .match-referee {
    text-align: center;
  }

  .match-bet-options {
    display: flex;
    margin-top: 8px;
    padding-bottom: 25px;
  }

  .match-bet-option {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    border: 1px solid #dbdade;
    background-color: #f9f9f9;
    border-radius: 2px;
    color: #8a8f98;
    font-size: 14px;
    font-weight: 600;
    padding: 1px 2px;
  }

  .match-bet-place {
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    background-color: #623ce6;
    border-radius: 6px;
    padding: 5px 24px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    box-shadow: 0 4px 8px 0 rgba(48, 48, 48, 0.25);
  }

  .match-footer {
    display: flex;
    padding: 0.5rem;
    border-top: 2px solid rgba(48, 48, 48, 0.1);
    align-items: center;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
`;
