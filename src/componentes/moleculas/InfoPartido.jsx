import styled from "styled-components";
import {FaRegClock} from "react-icons/fa";
import {Fecha, Goles} from "../../index";

export function InfoPartido({
  hora_formateada: hora,
  idestado,
  estado,
  goles_local,
  goles_visitante,
  fecha_utc,
}) {
  const renderizarContenido = () => {
    switch (idestado) {
      case 1:
        return (
          <Container>
            <Fecha text={fecha_utc} hora={hora} />
            <div>
              <Goles
                goles_local={goles_local}
                goles_visitante={goles_visitante}
              />
              <p className="text-xs font-bold py-1 px-2 rounded-full clr-primary capitalize">
                Finalizado
              </p>
            </div>
          </Container>
        );
      case 2:
        return (
          <Container>
            <Fecha text={fecha_utc} hora={hora} />
            <div>
              <Goles
                goles_local={goles_local}
                goles_visitante={goles_visitante}
              />
            </div>
          </Container>
        );
      case 5:
        return (
          <Container>
            <Fecha text={fecha_utc} hora={hora} />
            <div>
              <Goles
                goles_local={goles_local}
                goles_visitante={goles_visitante}
              />
              <div className="w-full font-bold text-red-500">
                <span className="text-xs">Cancelado</span>
              </div>
            </div>
          </Container>
        );
      case 7:
        return (
          <Container>
            <Fecha text={fecha_utc} hora={hora} />
            <div>
              <Goles
                goles_local={goles_local}
                goles_visitante={goles_visitante}
              />
              <div className="w-full font-bold text-red-500 flex justify-center">
                <FaRegClock className="text-xl" />
                <span className="text-xl parpadeo-1">'</span>
              </div>
            </div>
          </Container>
        );
      case 8:
        return (
          <Container>
            <Fecha text={fecha_utc} hora={hora} />
            <div>
              <Goles
                goles_local={goles_local}
                goles_visitante={goles_visitante}
              />
              <div className="w-full font-bold text-blue-500 flex justify-center">
                <span className="text-xs">Entretiempo</span>
              </div>
            </div>
          </Container>
        );
      default:
        return (
          <Container>
            <Fecha text={fecha_utc} hora={hora} />
            <div>
              <Goles
                goles_local={goles_local}
                goles_visitante={goles_visitante}
              />
              <p className="text-xs font-bold text-orange-500 capitalize">
                {estado}
              </p>
            </div>
          </Container>
        );
    }
  };
  return <>{renderizarContenido()}</>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 0.75rem;
  .parpadeo-1 {
    animation: parpadeo 1s infinite;
  }
  .clr-primary {
    color: #05a367;
  }
  @keyframes parpadeo {
    0%,
    49.9%,
    100% {
      opacity: 0;
    }
    50%,
    99.9% {
      opacity: 1;
    }
  }
`;
