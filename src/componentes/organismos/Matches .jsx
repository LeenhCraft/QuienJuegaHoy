import styled from "styled-components";
import {
  buscarJuego,
  TituloLiga,
  TarjetaPartido,
  getMatches,
  JuegoModal,
} from "../../index";
import {useEffect, useState} from "react";

export function Matches() {
  const [matches, setMatches] = useState([]);
  const [competiciones, setCompeticiones] = useState([]);

  useEffect(() => {
    // Obtén la fecha actual
    const date = new Date();
    // Establece la zona horaria para Perú (GMT-5)
    date.setHours(date.getHours() - 5);
    // Convierte la fecha a formato ISOString
    const peruDate = date.toISOString().slice(0, 10);
    // const peruDate = "2024-01-19";

    getMatches(peruDate + "%").then(({data, error}) => {
      if (error) {
        console.log(error + " Matches");
        return;
      }
      setMatches(data);

      const competicionesTemp = {};
      data.forEach((partido) => {
        const competicion = partido.competicion;
        if (!competicionesTemp[competicion]) {
          competicionesTemp[competicion] = {
            partidos: [],
            nombre: competicion,
            logo: partido.emblem_competicion,
          };
        }
        competicionesTemp[competicion].partidos.push(partido);
        setCompeticiones(competicionesTemp);
      });
    });
  }, []);

  const [juegos, setJuegos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const abrirModal = async (juegoId) => {
    buscarJuego(juegoId).then(({data, error}) => {
      if (error) {
        console.log(error);
        return;
      }

      const juegoData = data.reduce((acc, obj) => {
        return {...acc, ...obj};
      }, {});
      setJuegos(juegoData);
      setIsOpen(true);
    });
  };

  return (
    <Container>
      {/* {console.log("partidos del dia", competiciones)} */}
      {Object.values(competiciones).map((liga, index) => (
        <div key={index}>
          <TituloLiga nombre={liga.nombre} img={liga.logo} />
          {liga.partidos.map((partido) => (
            <TarjetaPartido
              key={partido.id}
              partido={partido}
              abrirModal={abrirModal}
            />
          ))}
        </div>
      ))}
      <JuegoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        data={juegos}
      />
      {Object.keys(competiciones).length === 0 && <h1>No hay partidos</h1>}
    </Container>
  );
}
const Container = styled.div`
  margin-bottom: 50px;
`;
