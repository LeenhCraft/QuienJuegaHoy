import styled from "styled-components";
import {JuegosData, TituloLiga, TarjetaPartido} from "../../index";

export function Matches() {
  const partidosPorLiga = JuegosData.reduce((acc, partido) => {
    const {competicion, emblem_competicion} = partido;

    if (!acc[competicion]) {
      acc[competicion] = {
        partidos: [],
        nombre: competicion,
        logo: emblem_competicion,
      };
    }

    acc[competicion].partidos.push(partido);
    return acc;
  }, {});

  return (
    <Container>
      {Object.values(partidosPorLiga).map((liga, index) => (
        <div key={index}>
          <TituloLiga nombre={liga.nombre} img={liga.logo} />
          {liga.partidos.map((partido) => (
            <TarjetaPartido key={partido.id} {...partido} />
          ))}
        </div>
      ))}
    </Container>
  );
}
const Container = styled.div``;
